const express = require('express')
const server = express()
const db = require('./database.js')
server.use(express.json())

server.get('/', (req, res) => {
    res.json({message: "hello world"})
})
server.get('/users', (req, res) => {
    const users = db.getUsers()
    res.json(users)
})
server.get('/users/:id', (req, res) => {
    const userId = req.params.id
    const user = db.getUserById(userId)

    if (user){
        res.json(user)
    } else {
        res.status(404).json({
            message: 'user not found'
        })
    }
})
server.post('/users', (req, res) => {
    const newUser = db.createUser({
        name: req.body.name,
    })
    res.status(201).json
})
server.patch('/users/:id', (req, res) => {
    
})
server.delete('/users/:id', (req, res) => {
    const removeUser = db.deleteUser(id)
})
server.listen(8080, () => {
    console.log('server started at port 8080')
})