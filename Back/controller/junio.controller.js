const Junio = require('../model/junio.model');

exports.createJunio = async (req, res)=>{
    try {
        let junio;

        junio = await new Junio(req.body)

        junio.save();
        res.send(junio)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error")
    }
}

exports.getVentasJunio = async (req, res) => {
    try {
        
        const junio = await Junio.find()
        res.json(junio)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.updateJunio = async (req, res) => {
    try {
        
        const {nombre_cliente, telefono_cliente, ultima_fecha_compra,
               producto, ultima_fecha_llamada, nombre_encargado, resultado, comentarios} = req.body
        let junio = await Junio.findById(req.params.id)

        if(!junio){
            res.status(404).json({msg: 'No existe el producto'})
        }

        junio.nombre_cliente = nombre_cliente;
        junio.telefono_cliente = telefono_cliente;
        junio.ultima_fecha_compra = ultima_fecha_compra;
        junio.producto = producto;
        junio.ultima_fecha_llamada = ultima_fecha_llamada;
        junio.nombre_encargado = nombre_encargado;
        junio.resultado = resultado;
        junio.comentarios = comentarios;
        
        junio = await Junio.findOneAndUpdate({_id: req.params.id}, junio, {new: true});
        res.json(junio)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.getJunio = async (req, res) => {
    try {
        
        const {nombre_cliente, telefono_cliente, ultima_fecha_compra,
               producto, ultima_fecha_llamada, nombre_encargado, resultado, comentarios} = req.body
        let junio = await Junio.findById(req.params.id)

        if(!junio){
            res.status(404).json({msg: 'No existe el producto'})
        }

        res.json(junio)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.deleteJunio = async (req, res) => {
    try {
    const {nombre_cliente, telefono_cliente, ultima_fecha_compra,
            producto, ultima_fecha_llamada, nombre_encargado, resultado, comentarios} = req.body
     let junio = await Junio.findById(req.params.id)

     if(!junio){
         res.status(404).json({msg: 'No existe el producto'})
     }

     await Junio.findOneAndRemove({_id: req.params.id})
     res.json({msg: 'Registro eliminado con éxito'})
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}