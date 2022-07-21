const JunioV = require('../controller/junio.controller');

module.exports = (router) => {
    router.post('/junio', JunioV.createJunio);
    router.get('/junio', JunioV.getVentasJunio);
    router.put('/junio/:id', JunioV.updateJunio);
    router.get('/junio/:id', JunioV.getJunio);
    router.delete('/junio/:id', JunioV.deleteJunio);
}