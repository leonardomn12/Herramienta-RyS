const AbrilV = require('../controller/abril.controller');

module.exports = (router) => {
    router.post('/abril', AbrilV.createAbril);
    router.get('/abril', AbrilV.getVentasAbril);
    router.put('/abril/:id', AbrilV.updateAbril);
    router.get('/abril/:id', AbrilV.getAbril);
    router.delete('/abril/:id', AbrilV.deleteAbril);
}