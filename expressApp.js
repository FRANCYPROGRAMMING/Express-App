require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
require('express-async-errors');

const app = express();

let planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];

app.use(express.json());
app.use(morgan('dev'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});