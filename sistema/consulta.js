const db = require('./conexao')

async function listar(){
    await db.connect()
    resultado = await db.query('select * from pedido')
    console.log(resultado.rows)
    await db.end()
}

listar()