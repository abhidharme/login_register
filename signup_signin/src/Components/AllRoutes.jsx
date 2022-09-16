import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom'
import { Images } from '../Pages/Images'
import { Login } from '../Pages/Login'
import { Register } from '../Pages/Register';

const PrivateRoute = ({ isAuthenticated, children = "nothing" }) => {
    return isAuthenticated ? children : <Navigate to="/login" />
  }
  

export const AllRoutes = () => {

    const { isAuthenticated } = useSelector((state) => state.login);

  return (
    <div>
    <Routes>
    <Route path="/" element={
        <PrivateRoute isAuthenticated={isAuthenticated}><Images /></PrivateRoute>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
    </Routes>
    </div>
  )
}
