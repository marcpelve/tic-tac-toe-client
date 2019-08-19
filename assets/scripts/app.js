'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

$(() => {
  $('.toggle-on-sign-in').hide()
  $('.toggle-on-new-game').hide()
  $('.toggle-off-sign-in').show()

  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  // $('#change-password').on('submit', authEvents.onChangePassword)
  $('#change-password-modal').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)

  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#modal-close').on('click', authEvents.onClose)

  $('#new-game').on('click', gameEvents.onNewGame)
  $('#game-board').on('click', gameEvents.onClickGame)
  $('#get-data').on('click', gameEvents.onGetData)
})
