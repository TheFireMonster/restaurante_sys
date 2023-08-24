const db = require('./conexao')

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
