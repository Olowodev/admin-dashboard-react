import React from 'react'
import './Modal.css'

const Modal = ({show, children, closeModal}) => {
  return (
    <div onClick={closeModal} className={show ? 'modal display-block' : 'modal display-none'}>
        <section onClick={e => { e.stopPropagation();}} className='modal-main'>
            {children}
        </section>
    </div>
  )
}

export default Modal