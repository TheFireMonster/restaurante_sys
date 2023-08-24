const db = require('./conexao')

async function excluiRegistro(){
    await db.connect()
    const excluir="DELETE FROM alunos WHERE id_aluno = '10'"
    await db.query(excluir)
    await db.end()
    console.log("Excluído com sucesso")
}

async function excluiRegistro(){
    await db.connect()
    const excluir="DELETE FROM alunos WHERE id_aluno = '10'"
    await db.query(excluir)
    await db.end()
    console.log("Excluído com sucesso")
}

async function excluiRegistro(){
    await db.connect()
    const excluir="DELETE FROM alunos WHERE id_aluno = '10'"
    await db.query(excluir)
    await db.end()
    console.log("Excluído com sucesso")
}

async function excluiRegistro(){
    await db.connect()
    const excluir="DELETE FROM alunos WHERE id_aluno = '10'"
    await db.query(excluir)
    await db.end()
    console.log("Excluído com sucesso")
}

excluiRegistro()