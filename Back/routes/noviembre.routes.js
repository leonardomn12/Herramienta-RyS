const NoviembreV = require('../controller/noviembre.controller');

module.exports = (router) => {
    router.post('/noviembre', NoviembreV.createNoviembre);
    router.get('/noviembre', NoviembreV.getVentasNoviembre);
    router.put('/noviembre/:id', NoviembreV.updateNoviembre);
    router.get('/noviembre/:id', NoviembreV.getNoviembre);
    router.delete('/noviembre/:id', NoviembreV.deleteNoviembre);
}