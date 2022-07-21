const mongoose = require('mongoose');

const diciembre = mongoose.Schema({
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
    ultima_fecha_compra: {
        type: Date,
        required: true,
        trim: true
    },
    producto: {
        type: String,
        required: true,
        trim: true
    },
    ultima_fecha_llamada: {
        type: Date,
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
    }
})

module.exports = mongoose.model('Diciembre', diciembre)