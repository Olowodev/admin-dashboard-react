import React from 'react'
import './Modal.css'

const Modal = ({show, children, width, closeModal, borderRadius}) => {

  console.log(show)
  return (
    <div onClick={closeModal} className={show ? 'modal display-block' : 'modal display-none'}>
        <div style={{ width: width, borderRadius: borderRadius}} onClick={e => { e.stopPropagation();}} className='modal-main'>
            {children}
        </div>
    </div>
  )
}

export default Modal