var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("Hello world");
});
app.get("/google",function(req,res){
    res.redirect("https://www.google.com/");

});
app.get("/google/:search",function(req,res){
    var t=req.params.search;
    res.redirect("https://www.google.com/search?q="+t);

});
app.listen(3000, function(){
   console.log("Example is running on port 3000");
});


