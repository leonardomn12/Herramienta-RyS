const AgostoV = require('../controller/agosto.controller');

module.exports = (router) => {
    router.post('/agosto', AgostoV.createAgosto);
    router.get('/agosto', AgostoV.getVentasAgosto);
    router.put('/agosto/:id', AgostoV.updateAgosto);
    router.get('/agosto/:id', AgostoV.getAgosto);
    router.delete('/agosto/:id', AgostoV.deleteAgosto);
}