const Maquinario = require('../models/maquinario')

const cadastrar = async (req,res)=>{
    const valores = req.body
    console.log('dados do front = ',valores)

        let precoVenda = 0

    if(valores.categoria === 'pequeno'){
        precoFinal = valores.precoCusto * 1.18
    }else if(valores.categoria === 'medio'){
        precoFinal = valores.precoCusto * 1.24
    }else if(valores.categoria === 'grade'){
        precoFinal = valores.precoCusto * 1.32
    }

    const valores2 = {
        nome: valores.nome,
        marca: valores.marca,
        tipo: valores.tipo,
        ano: valores.ano,
        precoCusto: valores.precoCusto,
        precoFinal: precoFinal
    }

    try{
        await Maquinario.create(valores)
        res.status(201).json({message: 'Dados do maquinário cadastrado com sucesso!'})
    }catch(err){
        res.status(500).json({message: 'Não foi possível cadastrar o maquinário!'})
        console.error('Não foi possível cadastrar o maquinário!', err)
    }
}

module.exports = { cadastrar }