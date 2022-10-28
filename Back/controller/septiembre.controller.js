const Septiembre = require('../model/septiembre.model');

exports.createSeptiembre = async (req, res) => {
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
        let septiembre = await Septiembre.findById(req.params.id)

        if (!septiembre) {
            res.status(404).json({
                msg: 'No existe el producto'
            })
        }

        septiembre.fecha_actual = fecha_actual;
        septiembre.nombre_cliente = nombre_cliente;
        septiembre.telefono_cliente = telefono_cliente;
        septiembre.ultima_fecha_llamada = ultima_fecha_llamada;
        septiembre.valor_compra = valor_compra;
        septiembre.frecuencia_compra = frecuencia_compra;
        septiembre.fecha_futura = fecha_futura;
        septiembre.nombre_encargado = nombre_encargado;
        septiembre.resultado = resultado;
        septiembre.comentarios = comentarios;
        septiembre.status = status;

        septiembre = await Septiembre.findOneAndUpdate({
            _id: req.params.id
        }, septiembre, {
            new: true
        });
        res.json(septiembre)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.getSeptiembre = async (req, res) => {
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
        let septiembre = await Septiembre.findById(req.params.id)

        if (!septiembre) {
            res.status(404).json({
                msg: 'No existe el producto'
            })
        }

        res.json(septiembre)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.deleteSeptiembre = async (req, res) => {
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
        let septiembre = await Septiembre.findById(req.params.id)

        if (!septiembre) {
            res.status(404).json({
                msg: 'No existe el producto'
            })
        }

        await Septiembre.findOneAndRemove({
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