const express = require("express")
const bodyParser = require('body-parser')
const app = express()

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.get("/", function (req, res) {
 res.send("Esta es la pagina Principal, FUNCIONA¡¡¡¡¡")
})

app.get("/Spanish", function (req, res) {
    res.send("Esta es la pagina en idioma español.")
   })

app.get("/Italiano", function (req, res) {
    res.send("Questa è la pagina in lingua italiana.")
   })

app.listen(5000)