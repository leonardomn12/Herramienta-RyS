const Marzo = require('../model/marzo.model');

exports.createMarzo = async (req, res) => {
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
        let marzo = await Marzo.findById(req.params.id)

        if (!marzo) {
            res.status(404).json({
                msg: 'No existe el producto'
            })
        }

        marzo.fecha_actual = fecha_actual;
        marzo.nombre_cliente = nombre_cliente;
        marzo.telefono_cliente = telefono_cliente;
        marzo.ultima_fecha_llamada = ultima_fecha_llamada;
        marzo.valor_compra = valor_compra;
        marzo.frecuencia_compra = frecuencia_compra;
        marzo.fecha_futura = fecha_futura;
        marzo.nombre_encargado = nombre_encargado;
        marzo.resultado = resultado;
        marzo.comentarios = comentarios;
        marzo.status = status;

        marzo = await Marzo.findOneAndUpdate({
            _id: req.params.id
        }, marzo, {
            new: true
        });
        res.json(marzo)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.getMarzo = async (req, res) => {
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
        let marzo = await Marzo.findById(req.params.id)

        if (!marzo) {
            res.status(404).json({
                msg: 'No existe el producto'
            })
        }

        res.json(marzo)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.deleteMarzo = async (req, res) => {
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
        let marzo = await Marzo.findById(req.params.id)

        if (!marzo) {
            res.status(404).json({
                msg: 'No existe el producto'
            })
        }

        await Marzo.findOneAndRemove({
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