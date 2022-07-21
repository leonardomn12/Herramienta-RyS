const Noviembre = require('../model/noviembre.model');

exports.createNoviembre = async (req, res)=>{
    try {
        let noviembre;

        noviembre = await new Noviembre(req.body)

        noviembre.save();
        res.send(noviembre)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error")
    }
}

exports.getVentasNoviembre = async (req, res) => {
    try {
        
        const noviembre = await Noviembre.find()
        res.json(noviembre)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.updateNoviembre = async (req, res) => {
    try {
        
        const {nombre_cliente, telefono_cliente, ultima_fecha_compra,
               producto, ultima_fecha_llamada, nombre_encargado, resultado, comentarios} = req.body
        let noviembre = await Noviembre.findById(req.params.id)

        if(!noviembre){
            res.status(404).json({msg: 'No existe el producto'})
        }

        noviembre.nombre_cliente = nombre_cliente;
        noviembre.telefono_cliente = telefono_cliente;
        noviembre.ultima_fecha_compra = ultima_fecha_compra;
        noviembre.producto = producto;
        noviembre.ultima_fecha_llamada = ultima_fecha_llamada;
        noviembre.nombre_encargado = nombre_encargado;
        noviembre.resultado = resultado;
        noviembre.comentarios = comentarios;
        
        noviembre = await Noviembre.findOneAndUpdate({_id: req.params.id}, noviembre, {new: true});
        res.json(noviembre)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.getNoviembre = async (req, res) => {
    try {
        
        const {nombre_cliente, telefono_cliente, ultima_fecha_compra,
               producto, ultima_fecha_llamada, nombre_encargado, resultado, comentarios} = req.body
        let noviembre = await Noviembre.findById(req.params.id)

        if(!noviembre){
            res.status(404).json({msg: 'No existe el producto'})
        }

        res.json(noviembre)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.deleteNoviembre = async (req, res) => {
    try {
    const {nombre_cliente, telefono_cliente, ultima_fecha_compra,
            producto, ultima_fecha_llamada, nombre_encargado, resultado, comentarios} = req.body
     let noviembre = await Noviembre.findById(req.params.id)

     if(!noviembre){
         res.status(404).json({msg: 'No existe el producto'})
     }

     await Noviembre.findOneAndRemove({_id: req.params.id})
     res.json({msg: 'Registro eliminado con éxito'})
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}