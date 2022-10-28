const mongoose = require('mongoose')

const clienteSchema = mongoose.Schema({
    nombre_cliente: {
        type: String,
        required: true,
        trim: true
    },
    identificacion: {
        type: String,
        required: true,
        trim: true
    },
    direccion: {
        type: String,
        required: true,
        trim: true
    },
    telefono: {
        type: String,
        required: true,
        trim: true
    },
    ciudad: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model('Cliente', clienteSchema)