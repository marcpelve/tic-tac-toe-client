'use strict'

const store = require('./../store')
const gameLogic = require('./game-logic')
const messages = require('./messages')
// const api = require('./api')

const newGameSuccess = data => {
  store.currentGame = data

  store.boardStatus = {}
  store.boardStatus.isOver = false
  store.boardStatus.currentPlayer = 'x'
  store.boardStatus.cells = store.currentGame.game.cells

  $('div[data-index]').each(function () {
    $(this).text(' ')
    $(this).data('editable', 'true')
  })

  messages.changeMessage('Successfully created new game.', 'alert alert-primary')

  $('.toggle-on-new-game').show()

  $('form').trigger('reset')
}

const updateGameSuccess = data => {
  if (!store.boardStatus.isOver) {
    if ($(data).data('editable') === 'true') {
      if (store.boardStatus.currentPlayer === 'x') {
        $(data).text('x')
        gameLogic.updateBoard(store.boardStatus.currentClickedIndex)
        store.boardStatus.currentPlayer = 'o'
      } else {
        $(data).text('o')
        gameLogic.updateBoard(store.boardStatus.currentClickedIndex)
        store.boardStatus.currentPlayer = 'x'
      }

      messages.changeMessage(`Tile ${store.boardStatus.currentClickedIndex + 1} registered with your mark.
        You are now player ${store.boardStatus.currentPlayer}`, 'alert alert-primary')

      $(data).data('editable', 'false')
      const state = gameLogic.checkBoard()

      if (state === 'victory') {
        if (store.boardStatus.currentPlayer === 'x') {
          messages.changeMessage('Player O won!', 'alert alert-primary')
        } else {
          messages.changeMessage('Player X won!', 'alert alert-primary')
        }
      } else if (state === 'draw') {
        messages.changeMessage('Draw!', 'alert alert-danger')
      }
    } else {
      messages.changeMessage('Tile already taken', 'alert alert-danger')
    }
  } else {
    messages.changeMessage('Game is over! Start new game', 'alert alert-danger')
  }
}

const getDataSuccess = data => {
  messages.changeMessage('Successfully retrieved games.', 'alert alert-primary')
  $('#data-message').text(`${data.games.length} games played.`)

  $('form').trigger('reset')
}

const failure = data => {
  messages.changeMessage('Operation error', 'alert alert-danger')

  $('form').trigger('reset')
}

module.exports = {
  newGameSuccess,
  updateGameSuccess,
  getDataSuccess,
  failure
}
