import models from  '../models/models.js';

// aqui definimos variables q contienen la logica que vamos a requerir en las rutas
let add = async (req, res, next) => {
    const { codigo, nombre } = req.body;
    try{
        const data = await models.Articulo.create({
            codigo,
            nombre
        })
        res.status(200).json(data);

    }catch(e){
        console.log(e)
        res.status(500).send({
            message : "Error in process add Article"
        })
    }

}


//list all record from searcher
let list = async (req, res, next) => {
    try{
        const data = await models.Articulo.find({
            
        }, {createAt: 0})
        .sort({'createAt':-1});
        res.status(200).json(data);
    }
    catch(e) {
        res.status(500).send({
            message: "Error in process from list all Articles"
        })
        next(e);
    }
}

// get Item by ID

let queryCode = async (req, res, next) => {
    try{
        const { code } = req.query;
        console.log(code);
        const data = await models.Articulo.find({ codigo: code});
        
        res.status(200).json(data);

    }
    catch(e){
        res.status(500).send({
            message: "ERROR in process from getItemById"
        });
        next(e);

    }
}

let activate = async(req, res, next) => {

    try{
        const { codigo } = req.query;
        const data = await models.Articulo.findOneAndUpdate({ codigo: codigo}, {estado: 1}, {new:true});       
        res.status(200).json(data);    
    }
    catch(e){
        res.status(500).send({
            message: "ERROR in update activate" +e
        })

    }

}


let desactivate = async (req, res, next) => {
    try{
        const { codigo } = req.query;
        const data = await models.Articulo.findOneAndUpdate({ codigo: codigo}, {estado: 0},{new:true});
        res.status(200).json(data);
    }
    catch(e){
        res.status(500).send({
            message: "ERROR in process desactivate" + e
        })
        next(e);
    }
}

let remove = async (req, res, next) => {
    try{
        const { codigo } = req.body;
        const result = await models.Articulo.findOneAndRemove({ codigo: codigo});
        res.status(200).json(result);
    }
    catch(e){
        res.status(500).send({
            message: "ERROR in process delte " + e
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