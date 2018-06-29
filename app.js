var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req,res) {
    res.redirect("/contacts");
});

app.get("/contacts", function(req,res) {
    res.render("contacts");
});

app.post("/contacts", function(req,res) {
});

app.get("/contacts/new", function(req,res) {
    res.render("new");
});

app.listen(3000, function() {
    console.log("HexBook Server Started");
})
