const express = require('express')
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator')
const session = require('express-session')

let app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views')

app.use(bodyParser.urlencoded({extended: true}))
app.use(expressValidator())
app.use(express.static('./app/public'))

// configurando o express session
app.use(session(
    { secret: 'keyImpossivelcodYek', 
      resave:  false,
      saveUninitialized: false,
    }
))

consign()
.include('app/routes')
.then('config/dbConnection.js')
.then('app/models')
.then('app/controllers')
.into(app)

module.exports = app