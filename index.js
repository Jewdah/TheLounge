const express = require("express")
const bodyParser = require('body-parser')
const app = express()

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/', urlencodedParser, function (req, res) {
    console.log(req.body.programacion)
    res.end()
  })

app.listen(3000)