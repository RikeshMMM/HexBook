var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var User = require("./models/userinfo");

mongoose.connect("mongodb://localhost/HexBook");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req,res) {
    res.redirect("/contacts");
});

app.get("/contacts", function(req,res) {
    User.find({}, function(err, allUsers){
        if(err) {
            console.log(err);
        }
        else {
            res.render("contacts", {users: allUsers});
        }
    });
});

app.post("/contacts", function(req,res) {
    var name = req.body.name;
    var numDec = req.body.numDec;
    var numHex = req.body.numHex;
    var newUser = {name: name, numDec: numDec, numHex: numHex}
    User.create(newUser, function(err, newlyCreated){
        if(err) {
            console.log(err);
        }
        else {
            res.redirect("/contacts");
        }
    });
});

app.get("/contacts/new", function(req,res) {
    res.render("new");
});

app.listen(3000, function() {
    console.log("HexBook Server Started");
})
