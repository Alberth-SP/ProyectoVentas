import mongoose from 'mongoose';

const { Schema , model } = mongoose;

const VentaSchema = new Schema({
    user: { type: Schema.ObjectId, ref: 'userschema', required: true},
    client: { type: Schema.ObjectId, ref: 'clientschema', required: true},
    tipo_comprobante: { type: String, maxlength:30, required:true},
    serie_comprobante: { type: String, maxlength: 20, required: true},
    impuesto: { type: Number, required: true},
    total: { type: Number , required: true},
    detalle: [
        {
            _id: { type: String, required: true},
            article: { type: String, required: true},
            cantidad: { type: Number, required: true},
            precio: { type: Number, required: true},
            descuento: { type: Number, required: true}
            
        }
    ],
    estado: { type: Number, default: 1},
    createAt: { type: Date, default: Date.now}

})

const Venta = model('ventaschema', VentaSchema);

export default Venta;