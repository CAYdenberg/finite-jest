
const express = require('express')
const app = express()

app.get('/house-price', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*')

  const result = Math.round(Math.random())

  if (result) {
    return res.json({price: 450000})
  } else {
    return res.status(500).json()
  }
})

app.listen(3000, function() {
  console.log('Server listening on port 3000!')
})
