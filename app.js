var _ = require("underscore");
var express = require("express");
var fs = require("fs");
var app = express();

app.get("/minetest/index.html", function(req, res) {
  fs.readFile("index.html", function(err, text) {
    res.sendfile("index.html");
  });
});

var server = app.listen(30002, function() {
  console.log("Listening on port %d", server.address().port);
});
