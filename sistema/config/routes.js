const express = require('express')

const routes = express.Router()
const path = require('path')

routes.get('/cadastro', function (req,res) {
    res.sendFile(path.join(__dirname+'/../src/cadastro/cadastro.html'))
})
  
routes.get('/login', function (req,res) {
    res.sendFile(path.join(__dirname+'/../src/login/login.html'))
})
  
routes.get('/cardapio', function (req,res) {
    res.send('Hello World')
})
  
routes.get('/home', function (req,res) {
    res.sendFile(path.join(__dirname+'/../src/home/home.html'))
})
  
routes.get('/ajuda', function (req,res) {
    res.sendFile(path.join(__dirname+'/../src/ajuda/ajuda.html'))
})
  
routes.get('/contato', function (req,res) {
    res.sendFile(path.join(__dirname+'/../src/contato/contato.html'))
})
  
module.exports = routes