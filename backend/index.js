const express = require('express')
const app = express()
const cors = require('cors')

const conn = require('./db/conn')
const maquinarioController = require('./controller/maquinario.controller')

const hostname = 'localhost'
const PORT = 3000
// --------------- Middleware --------------------
app.use (express.urlencoded({extended: true}))
app.use (express.json)
app.use (cors())
// --------------- Rotas -------------------------
app.post('/maquinario', maquinarioController.cadastrar)

app.get('/', (req,res)=>{
    res.status(200).json('Aplicação rodando!')
})
// --------------- Configurando o Servidor -------
conn.sync()
.then(()=>
    app.listen(PORT, hostname, ()=>{
        console.log(`Servidor rodando em http://${hostname}:${PORT}!`)
    })
)
.catch((err)=>{
    console.error('Erro ao tentar se conectar com o servidor!', err)
})