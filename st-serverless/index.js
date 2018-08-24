const serverless = require('serverless-http')
const express = require('express')

//const cors = require('cors')
const app = express() // allows async callbacks.
var session = require('express-session');
const keys = require('./config/keys.js')
//const bodyParser = require("body-parser");

// parse body for json.
//app.use(bodyParser.json());

console.log("process.env.GENOMELINK_CALLBACK_URL");
console.log(process.env.GENOMELINK_CALLBACK_URL);
console.log("process");
console.log(process.env);

// set keys in app session.
app.use(session({
    secret: keys.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 30 * 60 * 1000
    }
}));


// -------------------------

const authCall = require('./calls/authorize.js')
const snacksCall = require('./calls/snacks.js')
const reportsCall = require('./calls/reports.js')
const itemCall = require('./calls/item.js')

// welcome message.
app.get('/', function (req, res) { res.send('snacktime says hi') })

// authorize account
app.get('/authorize', authCall)

// get a list of snacks based on your blood serum levels
// each of the parameters is a number 0-4.
app.get('/snacks/:calcium/:iron/:magnesium/:vitamina/:vitamine', snacksCall)

// get snack details
app.get('/item/:asin', itemCall)

// get health reports for account
app.get('/reports/:token', reportsCall)

// payment callback, after payment
//app.post('/auth', paidFunction)

module.exports.handler = serverless(app);