const db = require('./conexao')

async function inserirDados(){
    await db.connect()
    const novoIngrediente="INSERT INTO ingrediente (quantidade_ingrediente, unidade_medida, nome_ingrediente, validade_ingrediente) VALUES ($1, $2, $3, $4)"
    await db.query(novoIngrediente,[5, 'ml', 'molho de tomate', '2023-09-22'])
    console.log("Inserção realizada")
    await db.end()
}

inserirDados()