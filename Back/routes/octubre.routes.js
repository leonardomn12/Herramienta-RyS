const OctubreV = require('../controller/octubre.controller');

module.exports = (router) => {
    router.post('/octubre', OctubreV.createOctubre);
    router.get('/octubre', OctubreV.getVentasOctubre);
    router.put('/octubre/:id', OctubreV.updateOctubre);
    router.get('/octubre/:id', OctubreV.getOctubre);
    router.delete('/octubre/:id', OctubreV.deleteOctubre);
}