'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

const onNewGame = event => {
  event.preventDefault()
  console.log('submitted new game', store)

  store.boardStatus = {}
  store.boardStatus.isOver = false
  store.boardStatus.currentPlayer = 'x'

  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.failure)
}

const onClickGame = event => {
  const tile = event.target
  const tileIndex = $(tile).data('index')
  store.boardStatus.currentClickedIndex = tileIndex

  api.updateGame()
    .then(ui.updateGameSuccess(tile))
    .catch(ui.failure)
}

module.exports = {
  onNewGame,
  onClickGame
}
