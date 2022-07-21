const Marzo = require('../model/marzo.model');

exports.createMarzo = async (req, res)=>{
    try {
        let marzo;

        marzo = await new Marzo(req.body)

        marzo.save();
        res.send(marzo)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error")
    }
}

exports.getVentasMarzo = async (req, res) => {
    try {
        
        const marzo = await Marzo.find()
        res.json(marzo)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.updateMarzo = async (req, res) => {
    try {
        
        const {nombre_cliente, telefono_cliente, ultima_fecha_compra,
               producto, ultima_fecha_llamada, nombre_encargado, resultado, comentarios} = req.body
        let marzo = await Marzo.findById(req.params.id)

        if(!marzo){
            res.status(404).json({msg: 'No existe el producto'})
        }

        marzo.nombre_cliente = nombre_cliente;
        marzo.telefono_cliente = telefono_cliente;
        marzo.ultima_fecha_compra = ultima_fecha_compra;
        marzo.producto = producto;
        marzo.ultima_fecha_llamada = ultima_fecha_llamada;
        marzo.nombre_encargado = nombre_encargado;
        marzo.resultado = resultado;
        marzo.comentarios = comentarios;
        
        marzo = await Marzo.findOneAndUpdate({_id: req.params.id}, marzo, {new: true});
        res.json(marzo)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.getMarzo = async (req, res) => {
    try {
        
        const {nombre_cliente, telefono_cliente, ultima_fecha_compra,
               producto, ultima_fecha_llamada, nombre_encargado, resultado, comentarios} = req.body
        let marzo = await Marzo.findById(req.params.id)

        if(!marzo){
            res.status(404).json({msg: 'No existe el producto'})
        }

        res.json(marzo)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.deleteMarzo = async (req, res) => {
    try {
    const {nombre_cliente, telefono_cliente, ultima_fecha_compra,
            producto, ultima_fecha_llamada, nombre_encargado, resultado, comentarios} = req.body
     let marzo = await Marzo.findById(req.params.id)

     if(!marzo){
         res.status(404).json({msg: 'No existe el producto'})
     }

     await Marzo.findOneAndRemove({_id: req.params.id})
     res.json({msg: 'Registro eliminado con éxito'})
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}