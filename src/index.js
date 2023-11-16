console.log("Hello World!")
const express = require('express')
const app = express()
const routes = require('./routes/routes')
const path = require('path')
const createError = require('http-errors')


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('views', path.join(__dirname,'/views'))
app.set('view engine', 'ejs')

app.use('/public', express.static('public'))

app.use(routes)

app.get('/', function(req, res) {
    res.redirect('/home')
})

app.use((req, res, next) => {
    next(createError(404))
})

app.use((err, req, res, next) => {
    if (!createError.isHttpError(err)) {
        err = createError(500)
    }

    res.status(err.status)

    res.render(`../../views/${err.status}`)
})

app.listen(3000)