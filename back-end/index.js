require('dotenv').config()
const express = require('express');
const { PORT } = process.env;

const app = express();

// app.listen(8080, () => {
//   console.log('listening on 8080')
// })

app.listen(PORT, () => {
  console.log(`listening on ${PORT}!!!!`)
})