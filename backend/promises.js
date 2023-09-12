/*function segunda(){
    console.log("Segunda execução")
}

console.log("Primeira execução")
segunda()
console.log("Terceira execução")

setTimeout(()=>{
    console.log("Quarta execução")
}, 2000)

console.log("Quinta execução")

function semPromise(){
    let resultado = 2*3
    if (resultado ==4){
        return('Sucesso')
    }
    else{return('Falha')}
}

console.log("Sem Promise "+semPromise())

const comPromise=new Promise((resolve,reject)=>{
    let resultado=2*1
    if(resultado ==4){
        resolve("Sucesso da promise")
    }else{
        reject("Promise falhou")
    }
})

console.log(comPromise)*/

function metodo(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('Aguardou')
            resolve()
        },3000)
    })
}

exports.teste = async function testeAsync(){
    console.log('Iniciou')
    await metodo().then(()=>{  
        console.log('Sucesso na transação')
    }).catch((erro)=>{
        console.log('Não deu certo '+erro)
    })
    console.log('Conectado ao servidor')

}

//try = síncrono
//then assíncrono
