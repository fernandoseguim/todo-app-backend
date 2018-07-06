const express = require('express')

module.exports = function(server){

    const router = express.Router()
    server.use('/api', router)

    const todoSerive = require('../api/todo/todoService')
    todoSerive.register(router, '/todos')
}


