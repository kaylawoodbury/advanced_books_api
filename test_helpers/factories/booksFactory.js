'use strict'

module.exports = function( factory, Models) {
  factory.define('Book', Models.Book, {
    title: 'Test Book',
    createdAt: new Date(),
    updatedAt: new Date()
  })
}