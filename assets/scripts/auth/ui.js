'use strict'

const store = require('./../store')

const signUpSuccess = data => {
  $('#message').text('Successfully signed up.')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signUpSuccess ran')

  $('form').trigger('reset')
}

const signInSuccess = data => {
  store.user = data.user

  $('#message').text('Successfully signed in.')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signInSuccess ran. User is', store.user)

  $('#signed-in-user').text('User: ' + store.user.email)

  $('.toggle-on-sign-in').css('visibility', 'visible')

  $('form').trigger('reset')
}

const changePasswordSuccess = data => {
  $('#message').text('Successfully changed password.')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('changePasswordSuccess ran')

  $('form').trigger('reset')
}

const signOutSuccess = data => {
  store.user = null
  $('#message').text('Successfully signed out.')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signOutSuccess ran')

  $('#signed-in-user').text('')

  $('.toggle-on-sign-in').css('visibility', 'hidden')

  $('form').trigger('reset')
}

const failure = data => {
  $('#message').text('Operation error')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('failure ran')

  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  failure
}
