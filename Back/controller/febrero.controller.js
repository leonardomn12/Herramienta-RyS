const Febrero = require('../model/febrero.model');

exports.createFebrero = async (req, res)=>{
    try {
        let febrero;

        febrero = await new Febrero(req.body)

        febrero.save();
        res.send(febrero)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error")
    }
}

exports.getVentasFebrero = async (req, res) => {
    try {
        
        const febrero = await Febrero.find()
        res.json(febrero)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.updateFebrero = async (req, res) => {
    try {
        
        const {nombre_cliente, telefono_cliente, ultima_fecha_compra,
               producto, ultima_fecha_llamada, nombre_encargado, resultado, comentarios} = req.body
        let febrero = await Febrero.findById(req.params.id)

        if(!febrero){
            res.status(404).json({msg: 'No existe el producto'})
        }

        febrero.nombre_cliente = nombre_cliente;
        febrero.telefono_cliente = telefono_cliente;
        febrero.ultima_fecha_compra = ultima_fecha_compra;
        febrero.producto = producto;
        febrero.ultima_fecha_llamada = ultima_fecha_llamada;
        febrero.nombre_encargado = nombre_encargado;
        febrero.resultado = resultado;
        febrero.comentarios = comentarios;
        
        febrero = await Febrero.findOneAndUpdate({_id: req.params.id}, febrero, {new: true});
        res.json(febrero)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.getFebrero = async (req, res) => {
    try {
        
        const {nombre_cliente, telefono_cliente, ultima_fecha_compra,
               producto, ultima_fecha_llamada, nombre_encargado, resultado, comentarios} = req.body
        let febrero = await Febrero.findById(req.params.id)

        if(!febrero){
            res.status(404).json({msg: 'No existe el producto'})
        }

        res.json(febrero)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.deleteFebrero = async (req, res) => {
    try {
    const {nombre_cliente, telefono_cliente, ultima_fecha_compra,
            producto, ultima_fecha_llamada, nombre_encargado, resultado, comentarios} = req.body
     let febrero = await Febrero.findById(req.params.id)

     if(!febrero){
         res.status(404).json({msg: 'No existe el producto'})
     }

     await Febrero.findOneAndRemove({_id: req.params.id})
     res.json({msg: 'Registro eliminado con éxito'})
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}