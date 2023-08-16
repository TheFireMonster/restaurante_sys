const express = require('express')
const app = express()

app.get('/cadastro', function (req,res) {
  res.sendFile(__dirname+'/src/cadastro/cadastro.html')
})

app.get('/login', function (req,res) {
  res.sendFile(__dirname+'/src/login/login.html')
})

app.get('/cardapio', function (req,res) {
  res.send('Hello World')
})

app.get('/home', function (req,res) {
  res.sendFile(__dirname+'/src/home/home.html')
})

app.get('/ajuda', function (req,res) {
  res.sendFile(__dirname+'/src/ajuda/ajuda.html')
})

app.get('/contato', function (req,res) {
  res.sendFile(__dirname+'/src/contato/contato.html')
})

app.listen(3000)