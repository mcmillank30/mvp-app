require('dotenv').config()// importing environmental variable
const express = require('express'); //importing express
const { PORT } = process.env; //importing PORT from .env file

const app = express();
// app.listen(8080, () => {
//   console.log('listening on 8080')
// })





app.listen(PORT, () => {
  console.log(`listening on ${PORT}!!!!`)
})