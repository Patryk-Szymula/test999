const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000; // bardzo istotna linijka - port zostaje przydzielony przez Heroku

app.get("/", function (req, res) {
    res.send("<h1>my app on heroku - kolejna mała zmiana w pliku!</h1>")
})

var data = {imie: "Patryk", nazwisko: "Szymula", klasa: "3I2", grupa: "1"}

app.get("/data", function (req, res) {
    res.send(data)
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})