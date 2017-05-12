import { middleware as asyncMiddleware } from 'redux-saga-async-action'

const req = require.context('.', true, /\.\/.+\/middleware\.js$/)

module.exports = req.keys()
  .map(key => req(key).default)
  .concat([
    asyncMiddleware,
  ])
