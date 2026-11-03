const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Product Service Running');
});

app.get('/health', (req, res) => {
  res.send('Product Service Healthy');
});

app.listen(3002, () => {
  console.log('Product Service Started');
});
