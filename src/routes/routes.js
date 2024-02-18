const express = require('express')
const path = require('path')
const Usuario = require('./../../models/Usuario')
const Produto = require('./../../models/Produto')
const Pedido = require('./../../models/Pedido')


const routes = express.Router()

class MenuRoute {
      static getMenu(req, res) {
            res.send('Hello World') //vai ser adicionado em breve
      }
}

class HomeRoute {
      static getHome(req, res) {
            res.render('./../../views/home')
      }
}

class HelpRoute {
      static getHelp(req, res) {
            //vai ser adicionado em breve
      }
}

class ContactRoute{
      static getContact(req, res){
            //vai ser adicionado em breve
      }
}

class LoginRoute{
      static getLogin(req, res){
            //vai ser adicionado em breve
      }
}

class SignupRoute{
      static getSignup(req, res){
            res.render('./../../views/Cadastro')
      }
      static postSignup(req, res){ 
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
      }
}
           

class RegProdRoute{
      static getRegProd(req, res){
            res.render('./../../views/RegistrarProd')
      }
      static postRegProd(req, res){
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
      }
}

class RegOrdRoute{
      static getRegOrd(req, res) {
            res.render('./../../views/RegistrarPed')
      }
      static postRegOrd(req, res) {
            const ped_quantidade_produto = req.body.ped_quantidade_produto
            const ped_id_usuario = req.body.ped_id_usuario
            const valor_ped = req.body.valor_ped
            const ped_numero_mesa = req.body.ped_numero_mesa
            Pedido.create({ id_mesa_pedido: ped_numero_mesa, id_usuario_pedido: ped_id_usuario }).then(function () {
                  res.send("Pedido cadastrado com sucesso")
            }).catch(function (erro) {
                  res.send("Não foi possível finalizar o pedido")
            })


      }
}

class Routes {
      constructor() {
            this.routes = express.Router()
            this.initRoutes()
      }

      initRoutes(){
            this.routes.get('/cardapio', MenuRoute.getMenu)
            this.routes.get('/home', HomeRoute.getHome)
            this.routes.get('/ajuda', HelpRoute.getHelp)
            this.routes.get('/contato', ContactRoute.getContact)
            this.routes.get('/login', LoginRoute.getLogin)
            this.routes.get('/cadastro', SignupRoute.getSignup)
            this.routes.post('/cad-fim', SignupRoute.postSignup)
            this.routes.get('/produtocad', RegProdRoute.getRegProd)
            this.routes.post('/prod-fim', RegProdRoute.postRegProd)
            this.routes.get('/pedidocad', RegOrdRoute.getRegOrd)
            this.routes.post('/ped-fim', RegOrdRoute.postRegOrd)
            
      }
}

module.exports = new Routes().routes