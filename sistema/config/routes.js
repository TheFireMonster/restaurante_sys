const express = require('express')
const usuarioNovo = require('./../insere')

const routes = express.Router()
const path = require('path')

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

routes.get('/cadastro', function (req, res) {
    res.sendFile(path.join(__dirname+'/../src/frontend/html/cadastro.html'))
})

routes.post('/cad-fim', function(req,res){
    const email = req.body.email
    const nome = req.body.nome
    const senha = req.body.senha
    const telefone = req.body.fone
    const cpf = req.body.cpf
    usuarioNovo.insereUsuario(senha, nome, cpf, telefone, email).then(function(){
          res.send("Usuário cadastrado com sucesso")
    }).catch(function(erro){
          res.send("Não foi possível finalizar o cadastro")
    })
})
  
module.exports = routes