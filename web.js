var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.logger());
app.use('/', express.static(__dirname + '/public'));


app.get('/', function(request, response) {
	var out=fs.readFileSync("./index.html", "utf8");
	response.send(out);

});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
