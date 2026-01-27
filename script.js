const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('This is the get  ')
})

app.post('/items', (req, res) => {
  res.send('This is the put ')
})

app.put('/items:id', (req, res) => {
  res.send('This is the put ')
})
app.delete('/items:id', (req, res) => {
  res.send('This is the put ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
