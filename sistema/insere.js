const db = require('./conexao')

async function inserirDados(){
    await db.connect()
    const novoAluno="INSERT INTO alunos (nome_aluno) VALUES ($1)"
    await db.query(novoAluno,['Maria'])
    console.log("Inserção realizada")
    await db.end()
}

async function inserirDados(){
    await db.connect()
    const novoAluno="INSERT INTO alunos (nome_aluno) VALUES ($1)"
    await db.query(novoAluno,['Maria'])
    console.log("Inserção realizada")
    await db.end()
}

async function inserirDados(){
    await db.connect()
    const novoAluno="INSERT INTO alunos (nome_aluno) VALUES ($1)"
    await db.query(novoAluno,['Maria'])
    console.log("Inserção realizada")
    await db.end()
}

async function inserirDados(){
    await db.connect()
    const novoAluno="INSERT INTO alunos (nome_aluno) VALUES ($1)"
    await db.query(novoAluno,['Maria'])
    console.log("Inserção realizada")
    await db.end()
}

inserirDados()