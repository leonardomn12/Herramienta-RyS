const SeptiembreV = require('../controller/septiembre.controller');

module.exports = (router) => {
    router.post('/septiembre', SeptiembreV.createSeptiembre);
    router.get('/septiembre', SeptiembreV.getVentasSeptiembre);
    router.put('/septiembre/:id', SeptiembreV.updateSeptiembre);
    router.get('/septiembre/:id', SeptiembreV.getSeptiembre);
    router.delete('/septiembre/:id', SeptiembreV.deleteSeptiembre);
}