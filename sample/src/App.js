import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './app.css'
import {action,comedy,horror,originals, romance} from './Urls'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
function App() {
  return (
    <div>
        <NavBar/>
        <Banner/>
        <RowPost url={originals} title='Netflix Originals' />
        <RowPost url={action} title='Actions' isSmall />
        <RowPost url={comedy} title='Comedy' isSmall />
        <RowPost url={horror} title='Horror' isSmall />
        <RowPost url={romance} title='Romance' isSmall />
        

    </div>
  )
}

export default App