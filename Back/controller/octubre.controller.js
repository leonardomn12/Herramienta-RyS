const Octubre = require('../model/octubre.model');

exports.createOctubre = async (req, res)=>{
    try {
        let octubre;

        octubre = await new Octubre(req.body)

        octubre.save();
        res.send(octubre)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error")
    }
}

exports.getVentasOctubre = async (req, res) => {
    try {
        
        const octubre = await Octubre.find()
        res.json(octubre)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.updateOctubre = async (req, res) => {
    try {
        
        const {nombre_cliente, telefono_cliente, ultima_fecha_compra,
               producto, ultima_fecha_llamada, nombre_encargado, resultado, comentarios} = req.body
        let octubre = await Octubre.findById(req.params.id)

        if(!octubre){
            res.status(404).json({msg: 'No existe el producto'})
        }

        octubre.nombre_cliente = nombre_cliente;
        octubre.telefono_cliente = telefono_cliente;
        octubre.ultima_fecha_compra = ultima_fecha_compra;
        octubre.producto = producto;
        octubre.ultima_fecha_llamada = ultima_fecha_llamada;
        octubre.nombre_encargado = nombre_encargado;
        octubre.resultado = resultado;
        octubre.comentarios = comentarios;
        
        octubre = await Octubre.findOneAndUpdate({_id: req.params.id}, octubre, {new: true});
        res.json(octubre)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.getOctubre = async (req, res) => {
    try {
        
        const {nombre_cliente, telefono_cliente, ultima_fecha_compra,
               producto, ultima_fecha_llamada, nombre_encargado, resultado, comentarios} = req.body
        let octubre = await Octubre.findById(req.params.id)

        if(!octubre){
            res.status(404).json({msg: 'No existe el producto'})
        }

        res.json(octubre)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.deleteOctubre = async (req, res) => {
    try {
    const {nombre_cliente, telefono_cliente, ultima_fecha_compra,
            producto, ultima_fecha_llamada, nombre_encargado, resultado, comentarios} = req.body
     let octubre = await Octubre.findById(req.params.id)

     if(!octubre){
         res.status(404).json({msg: 'No existe el producto'})
     }

     await Octubre.findOneAndRemove({_id: req.params.id})
     res.json({msg: 'Registro eliminado con éxito'})
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}