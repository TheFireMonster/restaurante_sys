const express = require('express')
const usuarioNovo = require('./../../db/insere')

const routes = express.Router()
const path = require('path')

routes.get('/login', function (req,res) {
    res.sendFile(path.join(__dirname+'./../../public/login.html'))
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
    res.sendFile(path.join(__dirname+'./../../public/cadastro.html'))
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

//testes no insomnia
//criação de array base

let infos=[
      {id:1, nome:"Calabresa", valor:50},
      {id:2, nome:"Carne", valor:30},
      {id:3, nome:"Frango", valor:50},
      {id:4, nome:"Queijo", valor:50},
      {id:5, nome:"Tomate", valor:35},
]

routes.get('/insomnia', function(req,res){
      res.json(infos)
})

routes.post('/insomnia', function(req,res){
      infos.push(req.body)
      res.send("Cadastro realizado")
})

function encontrar(id){
      return infos.filter(info => info.id == id)
}

function encontrarIndice(id){
      return infos.findIndex(info => info.id == id)
}

routes.get('/insomnia/:id', function(req,res){
      res.json(encontrar(req.params.id))
})

routes.delete('/insomnia/:id', function(req,res){
      let index = encontrarIndice(req.params.id)
      infos.splice(index,1)
      res.send("Registro excluído")
})

routes.put('/insomnia/:id', function(req,res){
      let index = encontrarIndice(req.params.id)
      infos[index].nome = req.body.nome
      infos[index].valor = req.body.valor
      res.send("Alteração realizada com sucesso")
})

module.exports = routes