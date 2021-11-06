import { Client, Room } from 'colyseus'
import { Dispatcher } from '@colyseus/command'

import TicTacToeState from './TicTacToeState'
import PlayerSelectionCommand from './commands/PlayerSelectionCommand'
import { GameState, Message } from './ITicTacToeState'

export class TicTacToe extends Room<TicTacToeState> {
  private dispatcher = new Dispatcher(this)

  onCreate() {
    this.maxClients = 2
    this.setState(new TicTacToeState())

    // this.onMessage(
    //   Message.PlayerSelection,
    //   (client, message: { index: number }) => {
    //     this.dispatcher.dispatch(new PlayerSelectionCommand(), {
    //       client,
    //       index: message.index,
    //     })
    //   }
    // )
  }

  onJoin(client: Client) {
    // const idx = this.clients.findIndex((c) => c.sessionId === client.sessionId)
    // client.send(Message.PlayerIndex, { playerIndex: idx })

    // console.log(`onJoin client length: ${this.clients.length}， idx： ${idx}`)
    // if (this.clients.length >= 2) {
    //   this.state.gameState = GameState.Playing
    //   this.lock()
    // }
  }
}
