import { useState, useEffect } from 'react';

function useTypingDelete(initialText, typingSpeed) {
  const [displayText, setDisplayText] = useState('');
  const [finishedTyping, setFinishedTyping] = useState(false);

  useEffect(() => {
    if (initialText) {
      let currentIndex = 0;
      let typing = true
      setFinishedTyping(false)

      const typingInterval = setInterval(() => {

        if (typing) {
          setDisplayText(initialText.slice(0, currentIndex));
          currentIndex += 1;
          if(currentIndex === initialText.length + 1) {
            typing = false
            clearInterval(typingInterval);
            setTimeout(() => {
              const deleteInterval = setInterval(() => {
                if (currentIndex >= 0) {
                  setDisplayText(initialText.slice(0, currentIndex));
                  currentIndex -= 1;
                } else {
                  clearInterval(deleteInterval);
                  setFinishedTyping(true); 
                }
              }, typingSpeed / 2); 
  
              return () => {
                clearInterval(deleteInterval);
              };
            }, 1000)
          }

          
        
        
        } 
      }, typingSpeed);
      return () => {
        clearInterval(typingInterval);
      };
    }
  }, [initialText, typingSpeed]);

  return { displayText, finishedTyping };
}

export default useTypingDelete;