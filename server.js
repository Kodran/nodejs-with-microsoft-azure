var http  =  require("http");
var express  =  require("express");
var app  =  express();

app.use(function(req, res, next) {
  res.status(200).send("hello, I'm in Azure :)");
});

//start server
app.listen(3000);