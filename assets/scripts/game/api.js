'use strict'

const config = require('./../config')
const store = require('./../store')

const newGame = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ''
  })
}

const updateGame = () => {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.currentGame.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: store.boardStatus.currentClickedIndex,
          value: store.boardStatus.currentPlayer
        },
        over: store.boardStatus.isOver
      }
    }
  })
}

const getData = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'GET'
  })
}

module.exports = {
  newGame,
  updateGame,
  getData
}
