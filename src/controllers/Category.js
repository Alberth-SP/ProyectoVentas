
import models from '../models/models.js';


let add = async (req, res, next) => {
    try{
        const { nombre, descripcion } = req.body;
        const data = await models.Category.create({
            
            nombre: nombre,
            descripcion: descripcion
        })

        res.status(200).json(data);

    }
    catch(e){
        res.status(500).send({
            message: "ERROR in add Category"
        })
    }
}

let list = async (req, res, next) => {
    try{
        const data = await models.Category.find({
            
        }, {createAt: 0})
        .sort({'createAt':-1});
        res.status(200).json(data);
    }
    catch(e) {
        res.status(500).send({
            message: "Error in process from list all Category"
        })
        next(e);
    }
}

// get Item by ID

let queryCode = async (req, res, next) => {
    try{
        const { nombre } = req.query;
        console.log(code);
        const data = await models.Category.find({ nombre: nombre});
        
        res.status(200).json(data);

    }
    catch(e){
        res.status(500).send({
            message: "ERROR in process getItemById from Category"
        });
        next(e);

    }
}

let activate = async(req, res, next) => {

    try{
        const { nombre } = req.body;
        const data = await models.Category.findOneAndUpdate({ nombre: nombre}, {estado: 1}, {new:true});       
        res.status(200).json(data);    
    }
    catch(e){
        res.status(500).send({
            message: "ERROR in  activate from Category " +e
        })

    }

}


let desactivate = async (req, res, next) => {
    try{
        const { nombre } = req.body;
        const data = await models.Category.findOneAndUpdate({ nombre: nombre}, {estado: 0},{new:true});
        res.status(200).json(data);
    }
    catch(e){
        res.status(500).send({
            message: "ERROR in  desactivate from Category" + e
        })
        next(e);
    }
}

let remove = async (req, res, next) => {
    try{
        const { nombre } = req.body;
        const result = await models.Category.findOneAndRemove({ nombre: nombre});
        res.status(200).json(result);
    }
    catch(e){
        res.status(500).send({
            message: "ERROR in process delete from Category " + e
        })
        next(e)

    }
}
 
export default {
    add,
    list,
    queryCode,
    activate,
    desactivate,
    remove
}