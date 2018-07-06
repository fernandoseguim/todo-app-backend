const bodyParser = require('body-parser')
const express = require('express')
const allowCors = require('./cors')

const server = express()
const port = 23003

server.use(allowCors)
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(port, function() {
    console.log(`Todo App backend server is running on port ${port}`)
})

module.exports = server