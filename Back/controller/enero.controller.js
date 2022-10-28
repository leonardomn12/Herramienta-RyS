const Enero = require('../model/enero.model');

exports.createEnero = async (req, res) => {
    try {
        let enero;

        enero = await new Enero(req.body)

        enero.save();
        res.send(enero)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error")
    }
}

exports.getVentasEnero = async (req, res) => {
    try {

        const enero = await Enero.find()
        res.json(enero)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.updateEnero = async (req, res) => {
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
        let enero = await Enero.findById(req.params.id)

        if (!enero) {
            res.status(404).json({
                msg: 'No existe el producto'
            })
        }

        enero.fecha_actual = fecha_actual;
        enero.nombre_cliente = nombre_cliente;
        enero.telefono_cliente = telefono_cliente;
        enero.ultima_fecha_llamada = ultima_fecha_llamada;
        enero.valor_compra = valor_compra;
        enero.frecuencia_compra = frecuencia_compra;
        enero.fecha_futura = fecha_futura;
        enero.nombre_encargado = nombre_encargado;
        enero.resultado = resultado;
        enero.comentarios = comentarios;
        enero.status = status;

        enero = await Enero.findOneAndUpdate({
            _id: req.params.id
        }, enero, {
            new: true
        });
        res.json(enero)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.getEnero = async (req, res) => {
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
        let enero = await Enero.findById(req.params.id)

        if (!enero) {
            res.status(404).json({
                msg: 'No existe el producto'
            })
        }

        res.json(enero)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.deleteEnero = async (req, res) => {
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
        let enero = await Enero.findById(req.params.id)

        if (!enero) {
            res.status(404).json({
                msg: 'No existe el producto'
            })
        }

        await Enero.findOneAndRemove({
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