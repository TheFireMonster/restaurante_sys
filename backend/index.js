console.log("Hello World!")
const express = require('express')
const app = express()
const routes = require('./config/routes')
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname, 'src', 'frontend', 'css')))

app.use(routes)

app.listen(3000)