const db = require('./conexao')

async function excluiRegistro(){
    await db.connect()
    const excluir="DELETE FROM ingrediente WHERE nome_ingrediente = 'extrato de tomate'"
    await db.query(excluir)
    console.log("Excluído com sucesso")
    await db.end()
}

excluiRegistro()