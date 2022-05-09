import React from 'react'
import Sign from '../containers/Sign'

console.log(window.mode);
const App = () => (
  <div>
    <Sign mode={window.mode}/>
  </div>
)

export default App
