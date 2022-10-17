const Octubre = require('../model/octubre.model');

exports.createOctubre = async (req, res) => {
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
        let octubre = await Octubre.findById(req.params.id)

        if (!octubre) {
            res.status(404).json({
                msg: 'No existe el producto'
            })
        }

        octubre.fecha_actual = fecha_actual;
        octubre.nombre_cliente = nombre_cliente;
        octubre.telefono_cliente = telefono_cliente;
        octubre.ultima_fecha_llamada = ultima_fecha_llamada;
        octubre.valor_compra = valor_compra;
        octubre.frecuencia_compra = frecuencia_compra;
        octubre.fecha_futura = fecha_futura;
        octubre.nombre_encargado = nombre_encargado;
        octubre.resultado = resultado;
        octubre.comentarios = comentarios;
        octubre.status = status;

        octubre = await Octubre.findOneAndUpdate({
            _id: req.params.id
        }, octubre, {
            new: true
        });
        res.json(octubre)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.getOctubre = async (req, res) => {
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
        let octubre = await Octubre.findById(req.params.id)

        if (!octubre) {
            res.status(404).json({
                msg: 'No existe el producto'
            })
        }

        res.json(octubre)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.deleteOctubre = async (req, res) => {
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
        let octubre = await Octubre.findById(req.params.id)

        if (!octubre) {
            res.status(404).json({
                msg: 'No existe el producto'
            })
        }

        await Octubre.findOneAndRemove({
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