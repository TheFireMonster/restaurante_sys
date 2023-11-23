const express = require('express')
const Usuario = require('./../../models/Usuario')
const Produto = require('./../../models/Produto')
const Pedido = require('./../../models/Pedido')


const routes = express.Router()
const path = require('path')

routes.get('/cardapio', function (req,res) {
    res.send('Hello World')
})
  
routes.get('/home', function (req,res) {
      res.render('./../../views/home')
})
  
routes.get('/ajuda', function (req,res) {
    res.sendFile(path.join(__dirname+'/../src/ajuda/ajuda.html'))
})
  
routes.get('/contato', function (req,res) {
    res.sendFile(path.join(__dirname+'/../src/contato/contato.html'))
})

routes.get('/login', function (req,res) {
      res.render('./../../views/Login')
  })

routes.get('/cadastro', function (req, res) {
      res.render('./../../views/Cadastro')
})

routes.get('/produtocad', function (req, res) {
      res.render('./../../views/RegistrarProd')
})
 
routes.get('/pedidocad', function (req, res) {
      res.render('./../../views/RegistrarPed')
})


routes.post('/cad-fim', function (req, res) {
      const email = req.body.email
      const nome = req.body.nome
      const senha = req.body.senha
      const telefone = req.body.fone
      const cpf = req.body.cpf
      Usuario.create({senha_usuario: senha, nome_usuario: nome, cpf_usuario: cpf, telefone_usuario: telefone, email_usuario: email}).then(function () {
            res.send("Usuário cadastrado com sucesso")
      }).catch(function (erro) {
            console.error(erro)
            res.send("Não foi possível finalizar o cadastro")
      })
})

routes.post('/prod-fim', function (req, res) {
      const nome_prod = req.body.nome_produto
      const desc_prod = req.body.descricao_produto
      const preco_prod = req.body.preco_produto
      const quant_prod = req.body.quantidade_produto
      const tipo_prod = req.body.tipo_produto
      const trans_prod = req.body.produto_transformacao
      Produto.create({nome_produto: nome_prod, descricao_produto: desc_prod, preco_produto: preco_prod, quantidade_produto: quant_prod, tipo_produto: tipo_prod, produto_transformacao: trans_prod}).then(function () {
            res.render('./../../views/RegistrarNovoProd')
      }).catch(function (erro) {
            console.error(erro)
            res.send("Não foi possível finalizar o cadastro do produto")
      })
})

routes.post('/ped-fim', function (req, res) {
      const ped_quantidade_produto = req.body.ped_quantidade_produto
      const ped_id_usuario = req.body.ped_id_usuario
      const valor_ped = req.body.valor_ped
      const ped_numero_mesa = req.body.ped_numero_mesa
      Pedido.create({id_mesa_pedido: ped_numero_mesa, id_usuario_pedido: ped_id_usuario}).then(function () {
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