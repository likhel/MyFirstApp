import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/UserFrontend/HomePage'
import FindaPet from './pages/UserFrontend/FindaPet'
import SignUp from './pages/Auths/SignUp'
import LoginPage from './pages/Auths/LoginPage'


const MyRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path = '' element = {<Layout/>}>
                <Route index element = {<HomePage/>}/>
                <Route path = 'signup' element = {<SignUp/>}/>
                <Route path = 'login'  element = {<LoginPage/>}/>
                <Route path = 'adopt-a-pet' element = {<FindaPet/>}/>

            
            
            
            </Route>
        
        
        </Routes>
    
    </Router>
  )
}

export default MyRoutes