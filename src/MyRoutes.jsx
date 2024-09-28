import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import SignUp from './pages/SignUp'
import LoginPage from './pages/LoginPage'

const MyRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path = '' element = {<Layout/>}>
                <Route index element = {<HomePage/>}/>
                <Route path = 'signup' element = {<SignUp/>}/>
                <Route path = 'login'  element = {<LoginPage/>}/>

            
            
            
            </Route>
        
        
        </Routes>
    
    </Router>
  )
}

export default MyRoutes