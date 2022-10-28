const Mayo = require('../model/mayo.model');

exports.createMayo = async (req, res) => {
    try {
        let mayo;

        mayo = await new Mayo(req.body)

        mayo.save();
        res.send(mayo)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error")
    }
}

exports.getVentasMayo = async (req, res) => {
    try {

        const mayo = await Mayo.find()
        res.json(mayo)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.updateMayo = async (req, res) => {
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
        let mayo = await Mayo.findById(req.params.id)

        if (!mayo) {
            res.status(404).json({
                msg: 'No existe el producto'
            })
        }

        mayo.fecha_actual = fecha_actual;
        mayo.nombre_cliente = nombre_cliente;
        mayo.telefono_cliente = telefono_cliente;
        mayo.ultima_fecha_llamada = ultima_fecha_llamada;
        mayo.valor_compra = valor_compra;
        mayo.frecuencia_compra = frecuencia_compra;
        mayo.fecha_futura = fecha_futura;
        mayo.nombre_encargado = nombre_encargado;
        mayo.resultado = resultado;
        mayo.comentarios = comentarios;
        mayo.status = status;

        mayo = await Mayo.findOneAndUpdate({
            _id: req.params.id
        }, mayo, {
            new: true
        });
        res.json(mayo)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.getMayo = async (req, res) => {
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
        let mayo = await Mayo.findById(req.params.id)

        if (!mayo) {
            res.status(404).json({
                msg: 'No existe el producto'
            })
        }

        res.json(mayo)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.deleteMayo = async (req, res) => {
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
        let mayo = await Mayo.findById(req.params.id)

        if (!mayo) {
            res.status(404).json({
                msg: 'No existe el producto'
            })
        }

        await Mayo.findOneAndRemove({
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