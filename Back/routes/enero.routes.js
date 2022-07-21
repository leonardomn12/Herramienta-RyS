const EneroV = require('../controller/enero.controller');

module.exports = (router) => {
    router.post('/enero', EneroV.createEnero);
    router.get('/enero', EneroV.getVentasEnero);
    router.put('/enero/:id', EneroV.updateEnero);
    router.get('/enero/:id', EneroV.getEnero);
    router.delete('/enero/:id', EneroV.deleteEnero)
}