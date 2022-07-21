const FebreroV = require('../controller/febrero.controller');

module.exports = (router) => {
    router.post('/febrero', FebreroV.createFebrero);
    router.get('/febrero', FebreroV.getVentasFebrero);
    router.put('/febrero/:id', FebreroV.updateFebrero);
    router.get('/febrero/:id', FebreroV.getFebrero);
    router.delete('/febrero/:id', FebreroV.deleteFebrero);
}