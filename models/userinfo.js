var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
    name: String,
    numDec: String,
    numHex: String
});

module.exports = mongoose.model("User", userSchema);