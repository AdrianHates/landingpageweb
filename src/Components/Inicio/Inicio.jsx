import { useEffect, useState } from 'react'
import useTypingDelete from '../../CustomHooks/useTypingEffect'
import './Inicio.css'

export default function Inicio ( { object } ) {
    const [text, setText] = useState(0)
    const { displayText, finishedTyping } = useTypingDelete(object.textoTipificado[text], 150)
    
    useEffect(() => {
      if (finishedTyping) {
        setText(prev => (prev + 1) % object.textoTipificado.length);
      }
    }, [finishedTyping]);
    return(
    <section className='inicio' id='inicio'>
      <div>
        {
          object && 
          <div>
            Diseñamos tu <br /><span>{displayText}</span>

          </div>
        }
        {
          object && <p>{object.p}</p>
        }
        {
          object && <button>{object.button}</button>
        }
      </div>
      
    </section>
  )
}