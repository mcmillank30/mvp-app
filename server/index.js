require('dotenv').config()// importing environmental variable
const express = require('express'); //importing express
const { PORT } = process.env; //importing PORT from .env file
const path = require('path');

const app = express();
// app.listen(8080, () => {
//   console.log('listening on 8080')
// })

//app.use('/', express.static('./client/dist'))
app.use('/', express.static(path.resolve(__dirname, '../client', 'dist')))//line 12 and 4, do the same thing as line 11. Connects my front end to my backend.(refer to node.js docs)

app.get('/', (req, res) => {})
app.post('/', (req, res) => {})
app.put('/', (req, res) => {})
app.delete('/', (req, res) => {})



app.listen(PORT, () => {
  console.log(`listening on ${PORT}!!!!`)
})