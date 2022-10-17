const mongoose = require('mongoose');

const octubre = mongoose.Schema({
    fecha_actual: {
        type: String,
        required: true,
        trim: true
    },
    nombre_cliente: {
        type: String,
        required: true,
        trim: true
    },
    telefono_cliente: {
        type: Number,
        required: true,
        trim: true
    },
    ultima_fecha_llamada: {
        type: String,
        required: true,
        trim: true
    },
    valor_compra: {
        type: Number,
        required: true,
        trim: true
    },
    frecuencia_compra: {
        type: Number,
        required: true,
        trim: true
    },
    fecha_futura: {
        type: String,
        required: true,
        trim: true
    },
    nombre_encargado: {
        type: String,
        required: true,
        trim: true
    },
    resultado: {
        type: String,
        required: true,
        trim: true
    },
    comentarios: {
        type: String,
        trim: true
    },
    status: {
        type: String,
        trim: true
    }
})

module.exports = mongoose.model('Octubre', octubre)