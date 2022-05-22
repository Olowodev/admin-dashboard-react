import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const RequireAuth = ({children}) => {
    const admin = useSelector((state) => state.user.currentUser === null ? null : state.user.currentUser.isAdmin);

    if (!admin) {
        return <Navigate to='/login' />
    }
    
  return children
}

export default RequireAuth