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
              <div key={event._id}>
                {'Id: ' + event._id}
                {' Name: ' + event.name}
                {' Url: ' + event._url}
                {' image: ' + event._imageUrl}
                {' description: ' + event.description}
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

  const events = Events.find().fetch()    
  return {
    ready: !handle.ready(),
    events: events
  }
}, _EventsDisplay)