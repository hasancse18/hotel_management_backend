const express = require('express')
const app = express()
const db = require("./db");
const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body


const Person = require('./models/Person');
const MenuItem = require('./models/Menu');







const personRoute = require('./routes/personRoutes')
app.use('/person',personRoute )

const menuRoute = require('./routes/menuRoutes')
app.use('/menu',menuRoute);
app.listen(3000)
