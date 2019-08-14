'use strict'

const store = require('./../store')

const updateBoard = data => {
  store.boardStatus.cells[data] = store.boardStatus.currentPlayer
  console.log(store.boardStatus.cells)
}

const checkBoard = () => {
  const board = store.boardStatus.cells
  if (!store.boardStatus.isOver) {
    if ((board[0] === 'x' && board[1] === 'x' && board[2] === 'x') || (board[0] === 'o' && board[1] === 'o' && board[2] === 'o')) {
      return victory()
    } else if ((board[0] === 'x' && board[4] === 'x' && board[8] === 'x') || (board[0] === 'o' && board[4] === 'o' && board[8] === 'o')) {
      return victory()
    } else if ((board[0] === 'x' && board[3] === 'x' && board[6] === 'x') || (board[0] === 'o' && board[3] === 'o' && board[6] === 'o')) {
      return victory()
    } else if ((board[2] === 'x' && board[5] === 'x' && board[8] === 'x') || (board[2] === 'o' && board[5] === 'o' && board[8] === 'o')) {
      return victory()
    } else if ((board[1] === 'x' && board[4] === 'x' && board[7] === 'x') || (board[1] === 'o' && board[4] === 'o' && board[7] === 'o')) {
      return victory()
    } else if ((board[3] === 'x' && board[4] === 'x' && board[5] === 'x') || (board[3] === 'o' && board[4] === 'o' && board[5] === 'o')) {
      return victory()
    } else if ((board[2] === 'x' && board[5] === 'x' && board[8] === 'x') || (board[2] === 'o' && board[5] === 'o' && board[8] === 'o')) {
      return victory()
    } else if ((board[6] === 'x' && board[7] === 'x' && board[8] === 'x') || (board[6] === 'o' && board[7] === 'o' && board[8] === 'o')) {
      return victory()
    } else if ((board[2] === 'x' && board[4] === 'x' && board[6] === 'x') || (board[2] === 'o' && board[4] === 'o' && board[6] === 'o')) {
      return victory()
    } else {
      if (!board.includes('')) {
        return draw()
      }
    }
  }
}

const victory = () => {
  store.boardStatus.isOver = true
  console.log('victory')
  return 'victory'
}

const draw = () => {
  store.boardStatus.isOver = true
  console.log('draw')
  return 'draw'
}

module.exports = {
  updateBoard,
  checkBoard,
  victory
}
