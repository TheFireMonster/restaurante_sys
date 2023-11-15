const pg = require('pg')
const {Pool} = require('pg')

const pool = new Pool({
    user:'postgres',
    host:'34.95.174.97',
    database:'restaurante',
    password:'postgres',
    port:5432
})

module.exports = pool