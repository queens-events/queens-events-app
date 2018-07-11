// QUEENS EVENTS
// Author: Hayden Pfeiffer <hayden.pfeiffer@queensu.ca>
//
// editEvent.jsx: Component for editing an event

import React, { Component } from 'react'
import { _ } from 'underscore'

import { Events } from '../api/events'

export class EditEvent extends Component {
  constructor () {
    super()

    this.state = {
      eventName: '',
      eventUrl: '',
      imageUrl: '',
      description: ''
    }

    this.insertEvent = this.insertEvent.bind(this)
  }

  insertEvent () {
    const newEvent = {
      name: this.state.eventName,
      url: this.state.eventUrl,
      imageUrl: this.state.imageUrl,
      description: this.state.description
    }

    Meteor.call('events.insert', newEvent, (err) => {
      if (err) console.error(err)
    })
  }

  render () {

    const setName = (e) => this.setState({ eventName: e.target.value })
    const setUrl = (e) => this.setState({ eventUrl: e.target.value })
    const setImage = (e) => this.setState({ imageUrl: e.target.value })
    const setDescription = (e) => this.setState({ description: e.target.value })

    return (
      <div>
        <input type='text' value={this.state.eventName} onChange={setName} placeholder='Event Name' />
        <input type='text' value={this.state.eventUrl} onChange={setUrl} placeholder='Event Link' />
        <input type='text' value={this.state.imageUrl} onChange={setImage} placeholder='Event Image Link' />
        <input type='text' value={this.state.description} onChange={setDescription} placeholder='Event Description' />
        <button onClick={this.insertEvent}>Create Event</button>
      </div>
    )
  }
}
