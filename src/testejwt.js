const jwt = require('jsonwebtoken')
const payload = {
    uderId: teste,
    username: 'testejwt'
}
const secretkey = 'secret key'
const token = jwt.sign(payload, secretKey)