import React, { Component } from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import { Events } from '../../api/events'

class _EventsDisplay extends Component {

  render() {
    return(
      <div>
        {
          this.props.events.map(event => {
            return(
              <div>
                {event._id}
                {event.name}
                {event._url}
                {event._imageUrl}
                {event.description}
                {event.createdAt}
              </div>
            )
          })
        }
      </div>
    )
  }
}

export const EventsDisplay = createContainer(() => {
  const handle = Meteor.subscribe('events.all')

  const events = Events.find()
                
  return {
    events: events
  }
}, _EventsDisplay)