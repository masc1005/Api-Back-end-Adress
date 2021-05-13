import 'reflect-metadata'
import express from 'express'
import dotenv from 'dotenv'
import routes from './routes'

import './database/connection'

dotenv.config()
const server = express()

server.use(express.json())
server.use(routes)
server.listen(process.env.SERVER_PORT, () => { console.log("Server On!") })