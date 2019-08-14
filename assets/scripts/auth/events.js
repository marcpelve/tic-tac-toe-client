'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = event => {
  event.preventDefault()
  console.log('submitted sign-up')

  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)

  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.failure)
}

const onSignIn = event => {
  event.preventDefault()
  console.log('submitted sign-in')

  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)

  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.failure)
}

const onChangePassword = event => {
  event.preventDefault()
  console.log('submitted change-password')

  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)

  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.failure)
}

const onSignOut = event => {
  console.log('clicked sign-out')

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
