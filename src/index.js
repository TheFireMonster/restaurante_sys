console.log("Hello World!")
const express = require('express')
const app = express()
const routes = require('./routes/routes')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static('../public'))

app.use(routes)

app.listen(3000)