import React from 'react'
import Navbar from './layouts/navbar'
import Sidebar from './layouts/sidebar'
import './styles.css'
import RouterSetup from './components/Route'
import useLocalStorage from './hooks/useLocalStorage'

function App() {
  const [display, setDisplay] = useLocalStorage('show',false)
  return (
      <div id='__layout'>
        <div className='flex flex-grow'>
          <Sidebar display={display} hide={() => setDisplay(!display)}></Sidebar>
          <div className='flex-grow flex flex-col flex-shrink' style={{ minWidth: '0px' }}>
            <Navbar display={display} show={() => setDisplay(!display)}></Navbar>
            {/* <!Body> */}
            <RouterSetup></RouterSetup>
            {/* <!----> */}
          </div>
        </div>
      </div>
  )
}

export default App