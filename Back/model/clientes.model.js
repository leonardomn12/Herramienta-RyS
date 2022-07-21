const mongoose = require('mongoose')

const clienteSchema = mongoose.Schema({
    nombre_cliente:{
        type: String,
        required: true,
        trim: true
    }, 
    nombre_encargado:{
        type: String,
        required: true,
        trim: true
    }, 
    correo: {
        type:String,
        required: true,
        unique: true,
        trim: true
    },
    celular:{
        type: Number,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model('Cliente', clienteSchema)