import models from '../models/models.js';


let add = async (req, res, next) => {
    try{
        const {
            typeClient,  
            nombre,         
            tipoDocumento,
            numDocumento,   
            direccion,      
            telefono,       
            email       

        } = req.body;

        const data = await models.Client.create({
            typeClient,  
            nombre,         
            tipoDocumento,
            numDocumento,   
            direccion,      
            telefono,       
            email 
        })
        
    }catch(e){
        res.status(500).send({
            message: "ERROR in process add from CLient"
        })
        next(e);
    }
}


let list = async ( req, res, next ) => {

    try{
        const data = await models.Client.find({}).sort({'createAt': -1})
        res.status(200).json(data);

    }catch(e){
        res.status(500).send({
            message: "ERROR in process list from CLIENT"
        })
        next(e);
    }

}
export default {
    add,
    list
}