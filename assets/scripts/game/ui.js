'use strict'

const store = require('./../store')
const gameLogic = require('./game-logic')
// const api = require('./api')

const newGameSuccess = data => {
  store.currentGame = data

  store.boardStatus = {}
  console.log('this is to check new game board', store.boardStatus)
  store.boardStatus.isOver = false
  store.boardStatus.currentPlayer = 'x'
  store.boardStatus.cells = store.currentGame.game.cells

  $('div[data-index]').each(function () {
    $(this).text(' ')
    $(this).data('editable', 'true')
  })

  console.log('check store game, store', store.currentGame, store)
  $('#message').text('Successfully created new game.')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('newGameSuccess ran', data)

  $('.toggle-on-new-game').css('visibility', 'visible')

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
      $('#message').text(`Tile ${store.boardStatus.currentClickedIndex + 1} registered with your mark.
        You are now player ${store.boardStatus.currentPlayer}`)
      $('#message').removeClass()
      $('#message').addClass('success')
      $(data).data('editable', 'false')
      const state = gameLogic.checkBoard()

      if (state === 'victory') {
        if (store.boardStatus.currentPlayer === 'x') {
          $('#message').text('Player O won!')
          $('#message').removeClass()
          $('#message').addClass('success')
        } else {
          $('#message').text('Player X won!')
          $('#message').removeClass()
          $('#message').addClass('success')
        }
      } else if (state === 'draw') {
        $('#message').text('Draw!')
        $('#message').removeClass()
        $('#message').addClass('failure')
      }
    } else {
      $('#message').text('Tile already taken')
      $('#message').removeClass()
      $('#message').addClass('failure')
    }
  } else {
    $('#message').text('Game is over! Start new game')
    $('#message').removeClass()
    $('#message').addClass('failure')
  }
}

const getDataSuccess = data => {
  $('#message').text('Successfully retrieved games.')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('getDataSuccess ran', data)
  $('#data-message').text(`${data.games.length} games played.`)

  $('form').trigger('reset')
}

const failure = data => {
  $('#message').text('Operation error')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('failure ran', data)

  $('form').trigger('reset')
}

module.exports = {
  newGameSuccess,
  updateGameSuccess,
  getDataSuccess,
  failure
}
