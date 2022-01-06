import mongoose  from 'mongoose';
const { Schema , model } = mongoose;
const CategorySchema = new Schema ({
    nombre:      { type: String , maxlength: 60, unique: true, require: true},
    descripcion: { type: String , maxlength: 255, required:true},   
    estado:      { type: Number, default: 1},
    createAt:    {type: Date, default:Date.now}
})

const Category = model('categoryschema',  CategorySchema)

export default Category;