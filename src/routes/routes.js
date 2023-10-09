const express = require('express')
const insereCad = require('./../../db/insere')


const routes = express.Router()
const path = require('path')

routes.get('/login', function (req,res) {
    res.sendFile(path.join(__dirname+'./../../public/login.html'))
})
  
routes.get('/cardapio', function (req,res) {
    res.send('Hello World')
})
  
routes.get('/home', function (req,res) {
    res.sendFile(path.join(__dirname+'/../../public/home.html'))
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

routes.get('/produtocad', function (req, res) {
      res.sendFile(path.join(__dirname+'./../../public/registrarprod.html'))
  })

routes.get('/pedidocad', function (req, res) {
      res.sendFile(path.join(__dirname+'./../../public/registrarped.html'))
})

routes.post('/cad-fim', function (req, res) {
      const email = req.body.email
      const nome = req.body.nome
      const senha = req.body.senha
      const telefone = req.body.fone
      const cpf = req.body.cpf
      insereCad.insereUsuario(senha, nome, cpf, telefone, email).then(function () {
            res.send("Usuário cadastrado com sucesso")
      }).catch(function (erro) {
            res.send("Não foi possível finalizar o cadastro")
      })
})

routes.post('/prod-fim', function (req, res) {
      const nome_prod = req.body.nome_produto
      const quant_prod = req.body.quantidade_produto
      const tipo_prod = req.body.tipo_produto
      insereCad.insereProduto(nome_prod, quant_prod, tipo_prod).then(function () {
            res.sendFile(path.join(__dirname+'./../../public/registrarnovoprod.html'))
      }).catch(function (erro) {
            res.send("Não foi possível finalizar o cadastro do produto")
      })
})

routes.post('/ped-fim', function (req, res) {
      const ped_quantidade_produto = req.body.ped_quantidade_produto
      const ped_id_usuario = req.body.ped_id_usuario
      const ped_id_produto = req.body.ped_id_produto
      const valor_ped = req.body.valor_ped
      const ped_numero_mesa = req.body.ped_numero_mesa
      insereCad.inserePedido(ped_numero_mesa, ped_id_usuario, ped_id_produto, ped_quantidade_produto, valor_ped).then(function () {
            res.send("Pedido cadastrado com sucesso")
      }).catch(function (erro) {
            res.send("Não foi possível finalizar o pedido")
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