var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/brazil', function (req, res) {
  res.send('Hello Brazil!\n');
});

app.get('/tobiascolombo', function(req, res) {
  res.send('Eu sou o Tobias Colombo');
});



app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});


