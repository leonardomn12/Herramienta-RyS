const Diciembre = require('../model/diciembre.model');

exports.createDiciembre = async (req, res) => {
    try {
        let diciembre;

        diciembre = await new Diciembre(req.body)

        diciembre.save();
        res.send(diciembre)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error")
    }
}

exports.getVentasDiciembre = async (req, res) => {
    try {

        const diciembre = await Diciembre.find()
        res.json(diciembre)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.updateDiciembre = async (req, res) => {
    try {

        const {
            fecha_actual,
            nombre_cliente,
            telefono_cliente,
            ultima_fecha_llamada,
            valor_compra,
            frecuencia_compra,
            fecha_futura,
            nombre_encargado,
            resultado,
            comentarios,
            status
        } = req.body
        let diciembre = await Diciembre.findById(req.params.id)

        if (!diciembre) {
            res.status(404).json({
                msg: 'No existe el producto'
            })
        }

        diciembre.fecha_actual = fecha_actual;
        diciembre.nombre_cliente = nombre_cliente;
        diciembre.telefono_cliente = telefono_cliente;
        diciembre.ultima_fecha_llamada = ultima_fecha_llamada;
        diciembre.valor_compra = valor_compra;
        diciembre.frecuencia_compra = frecuencia_compra;
        diciembre.fecha_futura = fecha_futura;
        diciembre.nombre_encargado = nombre_encargado;
        diciembre.resultado = resultado;
        diciembre.comentarios = comentarios;
        diciembre.status = status;

        diciembre = await Diciembre.findOneAndUpdate({
            _id: req.params.id
        }, diciembre, {
            new: true
        });
        res.json(diciembre)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.getDiciembre = async (req, res) => {
    try {

        const {
            fecha_actual,
            nombre_cliente,
            telefono_cliente,
            ultima_fecha_llamada,
            valor_compra,
            frecuencia_compra,
            fecha_futura,
            nombre_encargado,
            resultado,
            comentarios,
            status
        } = req.body
        let diciembre = await Diciembre.findById(req.params.id)

        if (!diciembre) {
            res.status(404).json({
                msg: 'No existe el producto'
            })
        }

        res.json(diciembre)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.deleteDiciembre = async (req, res) => {
    try {
        const {
            fecha_actual,
            nombre_cliente,
            telefono_cliente,
            ultima_fecha_llamada,
            valor_compra,
            frecuencia_compra,
            fecha_futura,
            nombre_encargado,
            resultado,
            comentarios,
            status
        } = req.body
        let diciembre = await Diciembre.findById(req.params.id)

        if (!diciembre) {
            res.status(404).json({
                msg: 'No existe el producto'
            })
        }

        await Diciembre.findOneAndRemove({
            _id: req.params.id
        })
        res.json({
            msg: 'Registro eliminado con éxito'
        })
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}