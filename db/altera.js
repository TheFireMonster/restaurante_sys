const db = require('./conexao')

async function atualizaRegistro(){
    await db.connect()
    const atualiza="UPDATE ingrediente SET nome_ingrediente = 'extrato de tomate' WHERE nome_ingrediente = 'molho de tomate'"
    await db.query(atualiza)
    console.log("Alterado com sucesso")
    await db.end()
}

atualizaRegistro()