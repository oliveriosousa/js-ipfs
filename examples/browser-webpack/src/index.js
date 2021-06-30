
const React = require('react')
const ReactDOM = require('react-dom')
const App = require('./components/app')

ReactDOM.render(<App />, document.getElementById('root'))

// Check if HMR interface is enabled
if (module.hot) {
  // Accept hot update
  module.hot.accept()
}
