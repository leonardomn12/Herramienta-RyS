const JulioV = require('../controller/julio.controller');

module.exports = (router) => {
    router.post('/julio', JulioV.createJulio);
    router.get('/julio', JulioV.getVentasJulio);
    router.put('/julio/:id', JulioV.updateJulio);
    router.get('/julio/:id', JulioV.getJulio);
    router.delete('/julio/:id', JulioV.deleteJulio);
}