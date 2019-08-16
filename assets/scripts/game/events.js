'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('./../store')
const messages = require('./messages')

const onNewGame = event => {
  event.preventDefault()

  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.failure)
}

const onClickGame = event => {
  const tile = event.target
  const tileIndex = $(tile).data('index')
  store.boardStatus.currentClickedIndex = tileIndex

  if (!store.boardStatus.isOver) {
    if ($(tile).data('editable') === 'true') {
      api.updateGame()
        .then(ui.updateGameSuccess(tile))
        .catch(ui.failure)
    } else {
      messages.changeMessage('Tile is already taken, please select another', 'alert alert-danger')
    }
  } else {
    messages.changeMessage('Game over, start new game', 'alert alert-warning')
  }
}

const onGetData = event => {
  api.getData()
    .then(ui.getDataSuccess)
    .catch(ui.failure)
}

module.exports = {
  onNewGame,
  onClickGame,
  onGetData
}
