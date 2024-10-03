import React from 'react'
import {UsageOfUseToggle} from './components/UsageOfUseToggle'
import {UsageOfUseLocalStorage} from './components/UsageOfUseLocalStorage'
import {UsageOfUseHover} from './components/UsageOfUseHover'
import {UsageOfUseViewportSize} from './components/UsageOfUseViewportSize'
import {UsageOfUseWindowScroll} from './components/UsageOfUseWindowScroll'
import {UsageOfUseFetch} from './components/UsageOfUseFetch'

function App() {
  return (
      <div className="App">
          <h1>EXAMPLES</h1>
          <h2 className='heading'>useToggle</h2>
          <UsageOfUseToggle/>
          <h2 className='heading'>useLocalStorage</h2>
          <UsageOfUseLocalStorage/>
          <h2 className='heading'>useHover</h2>
          <UsageOfUseHover/>
          <h2 className='heading'>useViewportSize</h2>
          <UsageOfUseViewportSize/>
          <h2 className='heading'>useWindowScroll</h2>
          <UsageOfUseWindowScroll/>
          <h2 className='heading'>useFetch</h2>
          <UsageOfUseFetch/>
      </div>
  )
}

export default App
