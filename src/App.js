import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Login from './Login'
import UserProfile from './UserProfile'
import './styles.css'

function App(props){
    return (
      <BrowserRouter>
        <div>
            <Route path='/' component={Login} />
            <Route path='/userProfile/:id' component={UserProfile} />
        </div>
      </BrowserRouter>
    ); 
}

export default App