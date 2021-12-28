const rotas = require('../routes/routes')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/inicio', rotas)


app.listen(8080, () => {
    console.log('Servidor executando...')
})