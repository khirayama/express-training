import express from 'express';

let app = express();

app.get('/', (req, res) => {
  res.send('Hello World.');
});

let server = app.listen(3000, () => {
  server.address().address;
  server.address().port;
});
