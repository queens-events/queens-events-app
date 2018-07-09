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
  description: String
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