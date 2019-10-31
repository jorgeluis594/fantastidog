const router = require('express').Router();
const Pedido = require('../models/pedido');

router.get('/',async(req,res)=>{
    const pedidos = await Pedido.find({fecha_entrega:{$gte:Date.now()}}).sort({fecha_entrega:'asc'});
    res.render('home',{pedidos});
});
router.get('/agregar_pago/:id',async (req,res)=>{
    const pedido = await Pedido.findById(req.params.id);
    res.render('agregarpago',{pedido});
});
router.put('/agregar_pago',async(req,res)=>{
   const {metodo_pago,importe} = req.body;
   const {costo} = await Pedido.findById(req.body.id);
   if (importe < costo ){
    const estado = 2;
    await Pedido.findByIdAndUpdate(req.body.id,{metodo_pago,importe,estado});
   }
   if (importe == costo){
       const estado = 3;
       await Pedido.findByIdAndUpdate(req.body.id,{metodo_pago,importe,estado});
   }
   
   res.redirect('/');
});
//agregar pedidos
router.get('/agregar_pedido',(req,res)=>{
    res.render('agregar_pedido');
});
router.post('/agregar_pedido',async(req,res)=>{
    const {nombre_mascota,edad,nombre_cliente,celular,pack,fecha_entrega,modelo_torta,tematica,sabor,gorrito,alergias,detalles,costo} = req.body;
    const newPedido = new Pedido({nombre_mascota,edad,nombre_cliente,celular,pack,fecha_entrega,modelo_torta,tematica,sabor,gorrito,alergias,detalles,costo});
    await newPedido.save();
    res.redirect('/');
});
module.exports = router;