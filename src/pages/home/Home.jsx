import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


const Home = () => {

  const admin = useSelector((state) => state.user.currentUser === null ? null : state.user.currentUser.isAdmin);

  
  /*if(!admin) {
    return <Navigate to='/login' />
  }*/
  return (
      <div>Home</div>
  )
}

export default Home