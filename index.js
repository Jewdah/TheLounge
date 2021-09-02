const express = require("express")
const bodyParser = require('body-parser')
const app = express()

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.get("/", function (req, res) {
 res.send("Hello World")
})

app.get("/Spanish", function (req, res) {
    res.send("Hola mundo")
   })

app.get("/Italiano", function (req, res) {
    res.send("Ciao mondo")
   })



app.post('/', urlencodedParser, function (req, res) {
    console.log(req.body.username)
    res.end()
  })


app.listen(3000)