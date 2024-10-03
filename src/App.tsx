import React from 'react'
import {UsageOfUseToggle} from './components/UsageOfUseToggle'
import {UsageOfUseLocalStorage} from './components/UsageOfUseLocalStorage'

function App() {
  return (
      <div className="App">
          <h1>EXAMPLES</h1>
          <h2 className='heading'>useToggle</h2>
          <UsageOfUseToggle/>
          <h2 className='heading'>useLocalStorage</h2>
          <UsageOfUseLocalStorage/>
      </div>
  )
}

export default App
