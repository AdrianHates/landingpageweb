import { useEffect, useState } from 'react';
import './Navbar.css'
export default function Navbar ( { object } ) {
  
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);

      if (currentPosition > 75) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  
  return(
    <header>
      <nav style={{ borderBottom:isScrolled?'1px solid whitesmoke':'1px solid transparent',
color:isScrolled?'black':'white', backgroundColor:isScrolled?'white':'transparent'}}>
      {
        object && <img alt='logo' src={object.logo} />

      }
      <div>
        {
          object && object.list.map((x,i)=> <div key={i}>
            <a href={`#${x.href}`}>{x.element}</a>
          </div>
            )
        }
      </div>
      {
        object && <a>{object.contact}</a>
      }

    </nav>
    <button>X</button>

    </header>
    
  )
}