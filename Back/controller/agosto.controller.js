const Agosto = require('../model/agosto.model');

exports.createAgosto = async (req, res)=>{
    try {
        let agosto;

        agosto = await new Agosto(req.body)

        agosto.save();
        res.send(agosto)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error")
    }
}

exports.getVentasAgosto = async (req, res) => {
    try {
        
        const agosto = await Agosto.find()
        res.json(agosto)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.updateAgosto = async (req, res) => {
    try {
        
        const {nombre_cliente, telefono_cliente, ultima_fecha_compra,
               producto, ultima_fecha_llamada, nombre_encargado, resultado, comentarios} = req.body
        let agosto = await Agosto.findById(req.params.id)

        if(!agosto){
            res.status(404).json({msg: 'No existe el producto'})
        }

        agosto.nombre_cliente = nombre_cliente;
        agosto.telefono_cliente = telefono_cliente;
        agosto.ultima_fecha_compra = ultima_fecha_compra;
        agosto.producto = producto;
        agosto.ultima_fecha_llamada = ultima_fecha_llamada;
        agosto.nombre_encargado = nombre_encargado;
        agosto.resultado = resultado;
        agosto.comentarios = comentarios;
        
        agosto = await Agosto.findOneAndUpdate({_id: req.params.id}, agosto, {new: true});
        res.json(agosto)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.getAgosto = async (req, res) => {
    try {
        
        const {nombre_cliente, telefono_cliente, ultima_fecha_compra,
               producto, ultima_fecha_llamada, nombre_encargado, resultado, comentarios} = req.body
        let agosto = await Agosto.findById(req.params.id)

        if(!agosto){
            res.status(404).json({msg: 'No existe el producto'})
        }

        res.json(agosto)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.deleteAgosto = async (req, res) => {
    try {
    const {nombre_cliente, telefono_cliente, ultima_fecha_compra,
            producto, ultima_fecha_llamada, nombre_encargado, resultado, comentarios} = req.body
     let agosto = await Agosto.findById(req.params.id)

     if(!agosto){
         res.status(404).json({msg: 'No existe el producto'})
     }

     await Agosto.findOneAndRemove({_id: req.params.id})
     res.json({msg: 'Registro eliminado con éxito'})
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}