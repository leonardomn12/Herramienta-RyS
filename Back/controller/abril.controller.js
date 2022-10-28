const Abril = require('../model/abril.model');

exports.createAbril = async (req, res) => {
    try {
        let abril;

        abril = await new Abril(req.body)

        abril.save();
        res.send(abril)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error")
    }
}

exports.getVentasAbril = async (req, res) => {
    try {

        const abril = await Abril.find()
        res.json(abril)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.updateAbril = async (req, res) => {
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
        let abril = await Abril.findById(req.params.id)

        if (!abril) {
            res.status(404).json({
                msg: 'No existe el producto'
            })
        }

        abril.fecha_actual = fecha_actual;
        abril.nombre_cliente = nombre_cliente;
        abril.telefono_cliente = telefono_cliente;
        abril.ultima_fecha_llamada = ultima_fecha_llamada;
        abril.valor_compra = valor_compra;
        abril.frecuencia_compra = frecuencia_compra;
        abril.fecha_futura = fecha_futura;
        abril.nombre_encargado = nombre_encargado;
        abril.resultado = resultado;
        abril.comentarios = comentarios;
        abril.status = status

        abril = await Abril.findOneAndUpdate({
            _id: req.params.id
        }, abril, {
            new: true
        });
        res.json(abril)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.getAbril = async (req, res) => {
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
        let abril = await Abril.findById(req.params.id)

        if (!abril) {
            res.status(404).json({
                msg: 'No existe el producto'
            })
        }

        res.json(abril)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.deleteAbril = async (req, res) => {
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
        let abril = await Abril.findById(req.params.id)

        if (!abril) {
            res.status(404).json({
                msg: 'No existe el producto'
            })
        }

        await Abril.findOneAndRemove({
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