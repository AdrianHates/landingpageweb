import { useState } from 'react';
import './Modal.css'


export default function Modal({ setIsOpen, button, children }) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className={`modal-overlay ${isVisible ? "" : "fade-out"}`}>
      <div className="modal-content">
        {
          button && <button className="close-button" onClick={() => {
            setIsVisible(false)
            setTimeout(() => setIsOpen(), 300)
          }}>
            X
          </button>
        }
        {children}
      </div>
    </div>
  )
}


