const DiciembreV = require('../controller/diciembre.controller');

module.exports = (router) => {
    router.post('/diciembre', DiciembreV.createDiciembre);
    router.get('/diciembre', DiciembreV.getVentasDiciembre);
    router.put('/diciembre/:id', DiciembreV.updateDiciembre);
    router.get('/diciembre/:id', DiciembreV.getDiciembre);
    router.delete('/diciembre/:id', DiciembreV.deleteDiciembre);
}