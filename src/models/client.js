import  mongoose  from 'mongoose';

const { Schema, model } = mongoose;


const ClientSchema = new Schema({
    typeClient:     { type: String, maxlength: 30, required: true},
    nombre:         { type: String, maxlength: 70, required: true},
    tipoDocumento : { type: String, maxlength: 30, required: true},
    numDocumento:   { type: Number, maxlength: 15, required: true, unique:true},
    direccion:      { type: String, maxlssength: 60, required: true} ,
    telefono:       { type: Number, maxlength: 12, required: true, unique:true},
    email:          { type: String, maxlength: 30, required: true, unique:true },   
    estado:         { type: Number, default:1},
    createAt:       { type:Date, default: Date.now}

})

const Client = model('cientschema', ClientSchema);

export default Client;