const pg = require('pg')

const client = new pg.Client({
    user:'postgres',
    host:'localhost',
    database:'restaurante',
    password:'postgres',
    port:5432
})

module.exports = client