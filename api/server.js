const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// Routers go here
const authRouter = require('../auth/auth-router');
const userRouter = require('../users/users-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

// Routes go here
server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);

server.get('/', (req, res) => {
    res.send("It's a Living, Breathing Server!")
})

module.exports = server;