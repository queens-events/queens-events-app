// QUEENS EVENTS
// Author: Hayden Pfeiffer <hayden.pfeiffer@queensu.ca>
//
// events.js: JS related to events collection

import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { check, Match } from 'meteor/check'

import { _ } from 'underscore'

// Events collection pattern
const eventPattern = {
  _id: String,
  url: String,
  imageUrl: String,
  description: String,
  createdAt: Date
}

// Create Event class
const Event = function (doc) { _.extend(this, doc) }
_.extend(Event.prototype, {})

// Create events collection
export const Events = new Mongo.Collection('events',
  { transform: (doc) => { return new Event(doc) } })

// data publishing
if (Meteor.isServer) {
  Meteor.publish('events.all', function () {
    return Events.find()
  }) 
}

// Meteor methods for events object
Meteor.methods({

  'events.insert' (event) {
    
    if (event._id) return Meteor.call('events.update', event)

    event.createdAt = new Date()

    check(event, eventPattern)

    const id = Events.insert(event)

    if (id) return Events.findOne({ _id: id })
    else throw Error('Unable to insert event')
  },

  'events.update' (event) {
    check(event, eventPattern)

    const updatedEvent = Events.update({ _id: event._id }, {
      $set: _.omit(event, '_id')
    })

    if (updatedEvent) return event
    else throw Error('Unable to update event')
  }
})