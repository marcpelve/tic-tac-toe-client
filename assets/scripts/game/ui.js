'use strict'

const store = require('./../store')
// const api = require('./api')

const newGameSuccess = data => {
  store.game = data
  console.log('check store game, store', store.game, store)
  $('#message').text('Successfully created new game.')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('newGameSuccess ran', data)

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
  failure
}
