var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
// var port = 9001;
var request = require('request');

app.set('port', (process.env.PORT || port));

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/public'));

// app.listen(port, function() {
//   console.log('listening on port: ', port);
// });

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
}); 