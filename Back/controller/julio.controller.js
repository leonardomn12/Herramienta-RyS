const Julio = require('../model/julio.model');

exports.createJulio = async (req, res)=>{
    try {
        let julio;

        julio = await new Julio(req.body)

        julio.save();
        res.send(julio)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error")
    }
}

exports.getVentasJulio = async (req, res) => {
    try {
        
        const julio = await Julio.find()
        res.json(julio)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.updateJulio = async (req, res) => {
    try {
        
        const {nombre_cliente, telefono_cliente, ultima_fecha_compra,
               producto, ultima_fecha_llamada, nombre_encargado, resultado, comentarios} = req.body
        let julio = await Julio.findById(req.params.id)

        if(!julio){
            res.status(404).json({msg: 'No existe el producto'})
        }

        julio.nombre_cliente = nombre_cliente;
        julio.telefono_cliente = telefono_cliente;
        julio.ultima_fecha_compra = ultima_fecha_compra;
        julio.producto = producto;
        julio.ultima_fecha_llamada = ultima_fecha_llamada;
        julio.nombre_encargado = nombre_encargado;
        julio.resultado = resultado;
        julio.comentarios = comentarios;
        
        julio = await Julio.findOneAndUpdate({_id: req.params.id}, julio, {new: true});
        res.json(julio)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.getJulio = async (req, res) => {
    try {
        
        const {nombre_cliente, telefono_cliente, ultima_fecha_compra,
               producto, ultima_fecha_llamada, nombre_encargado, resultado, comentarios} = req.body
        let julio = await Julio.findById(req.params.id)

        if(!julio){
            res.status(404).json({msg: 'No existe el producto'})
        }

        res.json(julio)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.deleteJulio = async (req, res) => {
    try {
    const {nombre_cliente, telefono_cliente, ultima_fecha_compra,
            producto, ultima_fecha_llamada, nombre_encargado, resultado, comentarios} = req.body
     let julio = await Julio.findById(req.params.id)

     if(!julio){
         res.status(404).json({msg: 'No existe el producto'})
     }

     await Julio.findOneAndRemove({_id: req.params.id})
     res.json({msg: 'Registro eliminado con éxito'})
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}