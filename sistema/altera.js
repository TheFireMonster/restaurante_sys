const db = require('./conexao')

async function atualizaRegistro(){
    await db.connect()
    const atualiza="UPDATE alunos SET nome_aluno = 'Maria do Bairro' WHERE nome_aluno = 'Maria'"
    await db.query(atualiza)
    await db.end()
    console.log("Alterado com sucesso")
}

async function atualizaRegistro(){
    await db.connect()
    const atualiza="UPDATE alunos SET nome_aluno = 'Maria do Bairro' WHERE nome_aluno = 'Maria'"
    await db.query(atualiza)
    await db.end()
    console.log("Alterado com sucesso")
}

async function atualizaRegistro(){
    await db.connect()
    const atualiza="UPDATE alunos SET nome_aluno = 'Maria do Bairro' WHERE nome_aluno = 'Maria'"
    await db.query(atualiza)
    await db.end()
    console.log("Alterado com sucesso")
}

async function atualizaRegistro(){
    await db.connect()
    const atualiza="UPDATE alunos SET nome_aluno = 'Maria do Bairro' WHERE nome_aluno = 'Maria'"
    await db.query(atualiza)
    await db.end()
    console.log("Alterado com sucesso")
}

atualizaRegistro()