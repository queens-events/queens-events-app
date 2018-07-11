// QUEENS EVENTS
// Author: Hayden Pfeiffer <hayden.pfeiffer@queensu.ca>
//
// routes.jsx: iron-router routes

import React from 'react'
import { mount } from 'react-mounter'

// Layouts and Pages
import { AppLayout } from '../../ui/layouts/app_layout'

Router.configure({
  loadingTemplate: 'loading'
})

import { EditEvent } from '../../ui/events/EditEvent'
import { EventDisplay } from '../../ui/events/EventDisplay'
Router.route('/', function () {
  mount(AppLayout, { content: <div><EditEvent /><EventDisplay /></div> })
}, {
  name: 'home'
})
