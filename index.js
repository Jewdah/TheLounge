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

app.get("/Brazilian", function (req, res) {
    res.send("Olá mundo")
   })

app.get("/Polaco", function (req, res) {
    res.send("Witaj świecie")
   })

app.get("/Noruego", function (req, res) {
    res.send("Hei Verden")
   })

app.get("/Aleman", function (req, res) {
    res.send("Hallo Welt")
   })


app.post('/', urlencodedParser, function (req, res) {
    console.log(req.body.username)
    res.end()
  })


app.listen(3000)