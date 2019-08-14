'use strict'

const store = require('./../store')
// const api = require('./api')

const newGameSuccess = data => {
  store.currentGame = data
  $('div[data-index]').each(function () { $(this).text(' ') })

  console.log('check store game, store', store.currentGame, store)
  $('#message').text('Successfully created new game.')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('newGameSuccess ran', data)

  $('form').trigger('reset')
}

const updateGameSuccess = data => {
  if (store.boardStatus.currentPlayer === 'x') {
    $(data).text('x')
    store.boardStatus.currentPlayer = 'o'
  } else {
    $(data).text('o')
    store.boardStatus.currentPlayer = 'x'
  }
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
  failure
}
