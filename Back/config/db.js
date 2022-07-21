const mongoose = require('mongoose');
const dbUrl = require('./properties').DB;

module.exports = ()=>{
    mongoose.connect(dbUrl, {useNewUrlParser: true})
    .then(()=> console.log(`Mongo Connected on ${dbUrl}`))
    .catch(err=> console.log(`Connection has error ${err}`))

    process.on('SIGINT', ()=>{
        mongoose.connection.close(()=>{
            console.log(`Mongo is disconnect`);
            process.exit(0);
        })
    })
}