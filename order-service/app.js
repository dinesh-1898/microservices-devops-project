const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Order Service Running');
});

app.get('/health', (req, res) => {
  res.send('Order Service Healthy');
});

app.listen(3003, () => {
  console.log('Order Service Started');
});
