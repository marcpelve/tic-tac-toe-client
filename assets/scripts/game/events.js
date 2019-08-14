'use strict'

const api = require('./api')
const ui = require('./ui')

const onNewGame = event => {
  event.preventDefault()
  console.log('submitted new game')

  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.failure)
}

module.exports = {
  onNewGame
}
