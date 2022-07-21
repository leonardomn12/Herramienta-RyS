const MarzoV = require('../controller/marzo.controller');

module.exports = (router) => {
    router.post('/marzo', MarzoV.createMarzo);
    router.get('/marzo', MarzoV.getVentasMarzo);
    router.put('/marzo/:id', MarzoV.updateMarzo);
    router.get('/marzo/:id', MarzoV.getMarzo);
    router.delete('/marzo/:id', MarzoV.deleteMarzo);
}