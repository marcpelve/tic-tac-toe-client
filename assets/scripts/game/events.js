'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

const onNewGame = event => {
  event.preventDefault()
  console.log('submitted new game', store)

  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.failure)
}

const onClickGame = event => {
  const tile = event.target
  console.log(tile)
  const tileIndex = $(tile).data('index')
  console.log(tileIndex)
  store.boardStatus.currentClickedIndex = tileIndex

  api.updateGame()
    .then(ui.updateGameSuccess(tile))
    .catch(ui.failure)
}

const onGetData = event => {
  console.log('clicked get data')

  api.getData()
    .then(ui.getDataSuccess)
    .catch(ui.failure)
}

module.exports = {
  onNewGame,
  onClickGame,
  onGetData
}
