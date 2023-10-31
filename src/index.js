console.log("Hello World!")
const express = require('express')
const app = express()
const routes = require('./routes/routes')
const path = require('path')


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('views', path.join(__dirname,'/views'))
app.set('view engine', 'ejs')

app.use('/public', express.static('public'))

app.use(routes)

app.listen(3000)