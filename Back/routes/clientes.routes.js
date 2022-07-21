const Cliente = require('../controller/clientes.controller')

module.exports = (router) =>{
    router.post('/clientes', Cliente.createCliente);
    router.get('/clientes', Cliente.getClientes);
    router.get('/clientes/:id', Cliente.getCliente);
    router.put('/clientes/:id', Cliente.updateCliente);
    router.delete('/clientes/:id', Cliente.deleteCliente);
}