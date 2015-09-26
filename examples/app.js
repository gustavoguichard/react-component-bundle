import React from 'react'
import MyComponent from '../src/component'

const App = React.createClass({
  render() {
    return <MyComponent />
  }
})

React.render(<App/>, document.getElementById('container'))
