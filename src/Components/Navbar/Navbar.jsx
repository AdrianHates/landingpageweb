import { useEffect, useState } from 'react';
import './Navbar.css'
export default function Navbar ( { object } ) {
  
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(null);


  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);

      if (currentPosition > 75) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = object.list.map((x) => document.getElementById(x.href));

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.clientHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        setActiveSection(section.id);
      }
    });
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
            <a href={`#${x.href}`} style={{color:activeSection===x.href?'coral':''}}>{x.element}</a>
          </div>
            )
        }
      </div>
      {
        object && <a href={`https://wa.me/+${object.contact.split(' ')[1]}`} style={{color:isScrolled?'black':'white'}}>{object.contact}</a>
      }

    </nav>
    <button>X</button>

    </header>
    
  )
}