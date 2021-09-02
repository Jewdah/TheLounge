const express = require("express")
const app = express()
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
    res.send("Ciao mondo")
   })
app.listen(3000)