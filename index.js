const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('Hello, world!');
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Server listening at http://localhost:' + port);
});
