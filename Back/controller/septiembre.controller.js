const Septiembre = require('../model/septiembre.model');

exports.createSeptiembre = async (req, res)=>{
    try {
        let septiembre;

        septiembre = await new Septiembre(req.body)

        septiembre.save();
        res.send(septiembre)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error")
    }
}

exports.getVentasSeptiembre = async (req, res) => {
    try {
        
        const septiembre = await Septiembre.find()
        res.json(septiembre)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.updateSeptiembre = async (req, res) => {
    try {
        
        const {nombre_cliente, telefono_cliente, ultima_fecha_compra,
               producto, ultima_fecha_llamada, nombre_encargado, resultado, comentarios} = req.body
        let septiembre = await Septiembre.findById(req.params.id)

        if(!septiembre){
            res.status(404).json({msg: 'No existe el producto'})
        }

        septiembre.nombre_cliente = nombre_cliente;
        septiembre.telefono_cliente = telefono_cliente;
        septiembre.ultima_fecha_compra = ultima_fecha_compra;
        septiembre.producto = producto;
        septiembre.ultima_fecha_llamada = ultima_fecha_llamada;
        septiembre.nombre_encargado = nombre_encargado;
        septiembre.resultado = resultado;
        septiembre.comentarios = comentarios;
        
        septiembre = await Septiembre.findOneAndUpdate({_id: req.params.id}, septiembre, {new: true});
        res.json(septiembre)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.getSeptiembre = async (req, res) => {
    try {
        
        const {nombre_cliente, telefono_cliente, ultima_fecha_compra,
               producto, ultima_fecha_llamada, nombre_encargado, resultado, comentarios} = req.body
        let septiembre = await Septiembre.findById(req.params.id)

        if(!septiembre){
            res.status(404).json({msg: 'No existe el producto'})
        }

        res.json(septiembre)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.deleteSeptiembre = async (req, res) => {
    try {
    const {nombre_cliente, telefono_cliente, ultima_fecha_compra,
            producto, ultima_fecha_llamada, nombre_encargado, resultado, comentarios} = req.body
     let septiembre = await Septiembre.findById(req.params.id)

     if(!septiembre){
         res.status(404).json({msg: 'No existe el producto'})
     }

     await Septiembre.findOneAndRemove({_id: req.params.id})
     res.json({msg: 'Registro eliminado con éxito'})
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}