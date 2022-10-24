//config do serv
const express = require('express')
const app = express()
const port = process.env.PORT || 3030
app.use(express.json())
app.set('view engine', 'ejs')

//rota padrao
app.get('/',(req,res)=>{
    res.render('index.ejs')
})

//uploads
app.post('/', (req,res)=>{
    res.send("Ok")
    console.log(req.body,req.file) //apoio a lógica
})

//escuta do serv
app.listen(port, ()=>{
    console.log(`Servidor escutado em http://localhost:${port}`)
})