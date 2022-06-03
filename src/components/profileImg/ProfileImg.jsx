import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './ProfileImg.css'

const ProfileImg = ({user, onClick, width, height, fontSize}) => {

    const colors = ['#f0112b', '#3351a6', '#ff6238', '#ffca27', '#552f62', '#51d0e7']
    const [color, setColor] = useState();

    const randomColor = () => {
        const colorpick = colors[Math.floor(Math.random() * colors.length)];
        setColor(colorpick)
    }

    useEffect(()=> {
        randomColor();
    }, [])

  return (
    <div onClick={()=>onClick()} style={{ backgroundColor : color, width : width, height : height}} className='profileImg'>
        <p style={{ fontSize : fontSize}}>{user.firstname.charAt(0)}{user.lastname.charAt(0)}</p>
    </div>
  )
}

export default ProfileImg