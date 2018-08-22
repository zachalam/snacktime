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
const itemCall = require('./calls/item.js')
const reportsCall = require('./calls/reports.js')

// welcome message.
app.get('/', function (req, res) { res.send('snacktime says hi') })

// generate random account
app.get('/authorize', authCall)

// get an item.
app.get('/item', itemCall)

// get reports for account
app.get('/reports/:token', reportsCall)

// payment callback, after payment
//app.post('/auth', paidFunction)

module.exports.handler = serverless(app);