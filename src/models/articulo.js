import mongoose  from 'mongoose';
const { Schema , model } = mongoose;
const ArticleSchema = new Schema ({
    codigo: { type: String , maxlength: 60, unique: true, require: true},
    nombre: { type: String , maxlength: 60, unique: true, require: true},
    descripcion: { type: String , maxlength: 255},
    precio_venta: { type: Number},
    stock: { type: Number, },
    estado: { type: Number, default: 1},
    createAt: {type: Date, default:Date.now}
})

const Articulo = model('articuloschema',  ArticleSchema)

export default Articulo;