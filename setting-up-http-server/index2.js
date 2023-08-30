// making up a HTTP server usign the express librabry. 

const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.post('/home', (req, res) => {
    res.send('Welcome home');
  });

  app.patch('/home', (req, res) => {
    res.send('this is patch');
  });


app.listen(port, function process() {
    console.log('server started');
});