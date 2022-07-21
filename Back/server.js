'use strict'
// Rutas
const authRoutes = require('./routes/auth.routes');
const EneroRoutes = require('./routes/enero.routes');
const FebreroRoutes = require('./routes/febrero.routes');
const MarzoRoutes = require('./routes/marzo.routes');
const AbrilRoutes = require('./routes/abril.routes');
const MayoRoutes = require('./routes/mayo.routes');
const JunioRoutes = require('./routes/junio.routes');
const JulioRoutes = require('./routes/julio.routes');
const AgostoRoutes = require('./routes/agosto.routes');
const SeptiembreRoutes = require('./routes/septiembre.routes');
const OctubreRoutes = require('./routes/octubre.routes');
const NoviembreRoutes = require('./routes/noviembre.routes');
const DiciembreRoutes = require('./routes/diciembre.routes');
const ClientesRoutes = require('./routes/clientes.routes');

// Servidor
const express = require('express');

// DB
const properties = require('./config/properties.js')
const DB = require('./config/db');

const cors = require('cors')

//Inicializar db
DB();

const app = express();
const router = express.Router();

const bodyParser = require('body-parser')
const bodyParserJSON = bodyParser.json()
const bodyParserURLEncoded = bodyParser.urlencoded({extended: true})

app.use(express.json())
app.use(bodyParserJSON)
app.use(bodyParserURLEncoded)

app.use(cors());
app.use('/api', router)
authRoutes(router);
EneroRoutes(router);
FebreroRoutes(router);
MarzoRoutes(router);
AbrilRoutes(router);
MayoRoutes(router);
JunioRoutes(router);
JulioRoutes(router);
AgostoRoutes(router);
SeptiembreRoutes(router);
OctubreRoutes(router);
NoviembreRoutes(router);
DiciembreRoutes(router);
ClientesRoutes(router);

router.get('/', (req, res)=>{
    res.send('Hello from home')
});

app.use(router)

app.listen(properties.PORT, ()=> console.log(`Server running in port ${properties.PORT}`));