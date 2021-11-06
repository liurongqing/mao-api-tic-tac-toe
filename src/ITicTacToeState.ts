import { Schema, ArraySchema } from '@colyseus/schema'

export enum GameState {
  WaitingForPlayers,
  Playing,
  Finished,
}

export enum Message {
  PlayerSelection,
  PlayerIndex,
}

export enum Cell {
  Empty,
  X,
  O,
}

export interface ITicTacToeState extends Schema {
  gameState: GameState

  board: ArraySchema<Cell>

  activePlayer: number

  winningPlayer: number
}
