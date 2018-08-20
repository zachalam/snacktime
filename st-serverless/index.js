const serverless = require('serverless-http')
const express = require('express')
//const cors = require('cors')
const app = express()
var session = require('express-session');
const keys = require('./config/keys.js')
//const bodyParser = require("body-parser");

// parse body for json.
//app.use(bodyParser.json());

// set keys in app session.
app.use(session(keys));

// -------------------------

const authCall = require('./calls/authorize.js')
const itemCall = require('./calls/item.js')

// welcome message.
app.get('/', function (req, res) { res.send('snacktime says hi') })

// generate random account
app.get('/authorize', authCall)

// get an item.
app.get('/item', itemCall)

// payment callback, after payment
//app.post('/auth', paidFunction)

module.exports.handler = serverless(app);