var express = require("express");
var app = express();
var request = require("request");
app.set("view engine" , "ejs");
app.get("/results", function(req, res){
    var search = req.query.moviename;
    console.log(search);
    request("http://www.omdbapi.com/?s="+ search + "&apikey=thewdb", function (error, response, body) {
        if(!error && response.statusCode == 200){
           var data = JSON.parse(body);
            res.render("results", {data: data});
        }
        else{
            console.log("Something went wrong!");
        }
});
})
app.get("/searchmovie", function(req, res){
    res.render("search");
})
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("**************SERVER HAS STARTED**************");
})
