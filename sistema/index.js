console.log("Hello World!")
const express = require('express')
const app = express()
const routes = require('./config/routes')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(routes)

app.listen(3000)