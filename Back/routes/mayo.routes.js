const MayoV = require('../controller/mayo.controller');

module.exports = (router) => {
    router.post('/mayo', MayoV.createMayo);
    router.get('/mayo', MayoV.getVentasMayo);
    router.put('/mayo/:id', MayoV.updateMayo);
    router.get('/mayo/:id', MayoV.getMayo);
    router.delete('/mayo/:id', MayoV.deleteMayo);
}