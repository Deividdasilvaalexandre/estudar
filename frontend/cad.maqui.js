const e = require("express")

let resposta = document.getElementById('resposta')
let btnCadastrar = document.getElementById('btnCadastrar')

btnCadastrar.addEventListener('click', (e)=>{
    e.preventDefault()
    nome = document.getElementById('nome').value
    marca = document.getElementById('marca').value
    tipo = document.getElementById('tipo').value
    ano = Number(document.getElementById('ano').value)
    precoCusto = Number(document.getElementById('precoCusto').value)

    const valores = {
        nome: nome,
        marca: marca,
        tipo: tipo,
        ano: ano,
        precoCusto: precoCusto
    }

    fetch('http://localhost:3000/maquinario',{method: POST,
        headers: {'Content-Types':'application/json'},
        body:JSON.stringify(valores())
    })
    .then(res => res.json())
    .then(dados=>{resposta.innerHTML = ''
        resposta.innerHTML += dados.message
    })
    .catch((err)=>{
        console.error('Erro ao tentar se cadastrar!', err)
    })
})