import express from 'express'
import { createServer } from 'http'
import { Server } from '@colyseus/core'
import { WebSocketTransport } from '@colyseus/ws-transport'
import { monitor } from '@colyseus/monitor'

const app = express()
const server = createServer(app)

const gameServer = new Server({
  transport: new WebSocketTransport({
    server,
  }),
})

app.use('/colyseus', monitor())
gameServer.listen(2567)
