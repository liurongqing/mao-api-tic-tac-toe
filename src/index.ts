import express from 'express'
import { createServer } from 'http'
import { Server } from '@colyseus/core'
import { WebSocketTransport } from '@colyseus/ws-transport'
import { monitor } from '@colyseus/monitor'

import { TicTacToe } from './TicTacToe'

const app = express()
// app.use(cors())
app.use(express.json())
const server = createServer(app)

const gameServer = new Server({
  transport: new WebSocketTransport({
    server,
  }),
})

gameServer.define('tic-tac-toe', TicTacToe)

app.use('/colyseus', monitor())
gameServer.listen(2567)
