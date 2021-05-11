import 'reflect-metadata'
import express from 'express'
import dotenv from 'dotenv'

import './database/connection'

dotenv.config()
const server = express()

server.listen(process.env.SERVER_PORT, () => { console.log("Server On!") })