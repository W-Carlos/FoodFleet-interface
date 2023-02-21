import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from '../containers/Login'
import Register from '../containers/Register'

function RoutesApp() {
    return (
        <Router>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/cadastro' element={<Register />} />
            </Routes>
        </Router>
    )
}

export default RoutesApp