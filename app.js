var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var friends = ["Tony", "miranda", "Justin",
        "Pierre", "Lilly"];

//tell express to use the bodyParser package
//use it everything u want to parse the request body
app.use(bodyParser.urlencoded({extended: true})); 

app.set("view engine", "ejs");
app.get("/", function(req, res){
    res.render("home");
});

app.get("/friends", function(req, res){
    
    res.render("friends", {friends: friends});
});

app.post("/addfriend", function(req, res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("friends"); //redirect to the friends page
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});