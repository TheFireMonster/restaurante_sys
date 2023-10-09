const db = require('./../src/config/conexao')

exports.insereUsuario = function(senha, nome, cpf, telefone, email){
    async function inserirDados(senha, nome, cpf, telefone, email){
        await db.connect()
        const novoUsuario="INSERT INTO usuario (senha_usuario, nome_usuario, cpf_usuario, telefone_usuario, email_usuario) VALUES ($1, $2, $3, $4, $5)"
        await db.query(novoUsuario,[senha, nome, cpf, telefone, email])
        console.log("Inserção realizada")
        //await db.end()
    }
    return (inserirDados(senha, nome, cpf, telefone, email))
}

exports.insereProduto = function(nome_produto, quantidade_produto, tipo_produto){
    async function inserirProd(nome_produto, quantidade_produto, tipo_produto){
        await db.connect()
        const novoProduto="INSERT INTO produto (nome_produto, quantidade_produto, tipo_produto) VALUES ($1, $2, $3)"
        await db.query(novoProduto,[nome_produto, quantidade_produto, tipo_produto])
        console.log("Produto registrado")
    }
    return (inserirProd(nome_produto, quantidade_produto, tipo_produto))
}

exports.inserePedido = function(ped_numero_mesa, ped_id_usuario, ped_id_produto, ped_quant_produto, ped_valor_total){
    async function inserirPedido(ped_numero_mesa, ped_id_usuario, ped_id_produto, ped_quant_produto, ped_valor_total){
        await db.connect()
        const novoPedido="INSERT INTO pedido (numero_mesa, id_usuario, id_produto, quantidade_produto, valor_total_pedido) VALUES ($1, $2, $3, $4, $5)"
        await db.query(novoPedido,[ped_numero_mesa, ped_id_usuario, ped_id_produto, ped_quant_produto, ped_valor_total])
        console.log("Pedido registrado")
    }
    return (inserirPedido(ped_numero_mesa, ped_id_usuario, ped_id_produto, ped_quant_produto, ped_valor_total))
}