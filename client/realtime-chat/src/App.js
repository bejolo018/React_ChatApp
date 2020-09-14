import React from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './Components/Header'
import Join from './Components/Join'
import Chat from './Components/Chat'

const App = () => (
    
    <Router>
        <Header />
        <Route path='/' exact component={Join} />
        <Route path='/chat' component={Chat} />
    </Router>
)

export default App