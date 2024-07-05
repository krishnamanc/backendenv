require('dotenv').config()

const express = require('express')

const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) =>{
    res.send('Login Page')
})

app.get('/signup', (req, res) =>{
    res.send('<h1>Signup Page</h1>')
})

app.listen(process.env.PORT, () => {
  console.log('Example app listening on port ${port}')
})