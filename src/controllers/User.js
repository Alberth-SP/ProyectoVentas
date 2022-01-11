import models from '../models/models.js';
import utils from './Util.js/functions.js'
import token from '../services/token.js';
let add = async (req, res, next)  => {   

    try {
        const { 
            rol,
            nombre,
            tipoDocumento,
            numDocumento,
            direccion,
            telefono,
            email,
            Password
        } = req.body;
        const password = await utils.encryptPassword(Password);

        const data = await models.User.create({
            rol,
            nombre,
            tipoDocumento,
            numDocumento,
            direccion,
            telefono,
            email,
            password
        })
        res.status(200).json(data);

    }catch(e){
        res.status(500).send({
            message: "ERROR in process add User"
        })
        next(e);
    }

}


let list = async (req, res, next) => {
    try{

        const data = await models.User.find({}).sort({'createAt': -1});

        res.status(200).json(data);

    }catch(e){
        res.status(200).send({
            message: "ERROR in process list Users"
        })

        next(e)

    }
}

let login = async (req, res, next) => {
    try{
        const { email, password } = req.body;
        let user = await models.User.findOne({'email': email, 'estado': 1})
        if ( user ){
            let match = await utils.matchPassword(password, user.password);
            if(match){
                const newToken = token.encode(user._id)

                res.status(200).json(user)
            }else{
                res.status(404).send({
                    message: "ERROR IN LOGIN"
                })
                
            }
        }else{
            res.status(404).send({
                message: "ERROR EL USUARIO NO EXISTE"
            })
            

        }


    }catch(e){
        res.status(200).send({
            message: "ERROR in login from User."
        })
    }
}
export default {
    add,
    list,
    login
}