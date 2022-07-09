import React from 'react'
import ReactDOM  from 'react-dom'
import './Modal.css'

export default function Modal({children, }) {
  return ReactDOM.createPortal((
    <div className='modal-backdrop'>
        <div className="modal" style={{
            border: "4px solid",
            textAlign: 'center',
            borderColor: "#ff4500"
        }}>
           {children}
           
        </div>
    </div>
  ), document.body)
}
