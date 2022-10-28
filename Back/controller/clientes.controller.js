const Cliente = require('../model/clientes.model')

exports.createCliente = async (req, res)=>{
    try {
        let cliente;

        cliente = await new Cliente(req.body)

        cliente.save();
        res.send(cliente)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error")
    }
}

exports.getClientes = async (req, res) => {
    try {
        
        const cliente = await Cliente.find()
        res.json(cliente)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.updateCliente = async (req, res) => {
    try {
        
        const {nombre_cliente, identificacion, direccion, telefono, ciudad} = req.body
        let cliente = await Cliente.findById(req.params.id)

        if(!cliente){
            res.status(404).json({msg: 'No existe el producto'})
        }

        cliente.nombre_cliente = nombre_cliente;
        cliente.identificacion = identificacion;
        cliente.direccion = direccion;
        cliente.telefono = telefono;
        cliente.ciudad = ciudad;
        
        cliente = await Cliente.findOneAndUpdate({_id: req.params.id}, cliente, {new: true});
        res.json(cliente)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.getCliente = async (req, res) => {
    try {
        
        const {nombre_cliente, identificacion, direccion, telefono, ciudad} = req.body
        let cliente = await Cliente.findById(req.params.id)

        if(!cliente){
            res.status(404).json({msg: 'No existe el producto'})
        }

        res.json(cliente)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.deleteCliente = async (req, res) => {
    try {

        const {nombre_cliente, identificacion, direccion, telefono, ciudad} = req.body
        let cliente = await Cliente.findById(req.params.id)

     if(!cliente){
         res.status(404).json({msg: 'No existe el producto'})
     }

     await Cliente.findOneAndRemove({_id: req.params.id})
     res.json({msg: 'Registro eliminado con éxito'})
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}