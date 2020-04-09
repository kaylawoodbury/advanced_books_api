'use strict'

var factory = require('factory-girl')
const adapter = new factory.SequelizeAdapter()

var factory = factory.factory
factory.setAdapter(adapter)

var Models = require('../models')

factory.cleanUp()
factory.factories = []

require('./factories')(factory, Models)

beforeEach(function (done) {
  Models.sequelize.sync({
    force: true
  }).then(function () {
    done()
  })
})

module.exports = {
  factory: factory,
  Models: Models
}