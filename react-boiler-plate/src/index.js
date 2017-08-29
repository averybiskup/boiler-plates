import React from 'react'
import { render } from 'react-dom'
import { App } from './components/App'

window.React = React

render(
  <App />,
  document.getElementById('react-container')
)


/*
  If you want to use the json component, here are the changes
  to be made to this file.

  The render should have this in it
  (
    <div>
      {hello}
      {goodbye}
    </div>,
  )
  and you must import the component as well
  (
  import { hello, goodbye } from './components/lib'
  )

*/
