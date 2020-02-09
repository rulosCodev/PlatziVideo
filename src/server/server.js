const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const ENV = process.env.NODE_ENV;

const PORT = process.env.PORT || 3000;

const app = express();

app.get('*', (req, res) => {
  res.send({
    hola: 'Mundo',
  });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server running on http://localhost:${PORT}`);

});
