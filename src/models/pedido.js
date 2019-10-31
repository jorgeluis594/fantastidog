const mongoose = require('mongoose');
const {Schema} = mongoose;
const pedidoSchema = new Schema({
    nombre_mascota : {type:String , required:true},
    edad: {type:String, required:true},
    nombre_cliente:{type:String, required:true},
    celular:{type:String, required:false},
    pack:{type:String,required:true},
    fecha_entrega:{type:Date,required:true},
    modelo_torta:{type:String,required:false},
    tematica:{type:String,required:false},
    sabor:{type:String,required:false},
    gorrito:{type:String,required:false},
    alergias:{type:String,required:false},
    detalles:{type:String,required:false},
    costo:{type:Number,required:true},
    fecha_pedido:{type:Date, default:Date.now},
    metodo_pago:{type:String, required:false},
    importe:{type:Number,required:false},
    estado:{type:Number,default:1} //1=sin pago. 2=adelanto. 3=pago total
});
module.exports = mongoose.model('Pedido',pedidoSchema);