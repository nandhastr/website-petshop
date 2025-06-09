import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTop = () => {
    const [showButton, setShowButton] = useState(false);



    useEffect(() => { 
        const handleScroll = () => {
            const position = 200;
            if (window.scrollY > position) {
                setShowButton(true);
            } else {
                setShowButton(false);
           }
        };
        window.addEventListener('scroll', handleScroll);

        return ()=> window.removeEventListener('scroll', handleScroll);
     },[])

    const handleScrollToTop = () => {
      
        const start = window.scrollY;
        const duration = 4000;
        const startTime = performance.now();

        // scroll cepat ke lambat
        const easeInAccel = (t) => 1 - Math.pow(1 - t, 5);

        // scroll lambat ke cepat
        // const easeInAccel = (t) => t*t*t;

        const scroll = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = easeInAccel(progress);

            window.scrollTo(0, start + (start * (0 - ease)));


            if (elapsed < duration) {
                requestAnimationFrame(scroll);
            }
        };

        requestAnimationFrame(scroll);
    }
  return (
      <button
          onClick={handleScrollToTop}
          className={`bg-[#7AB730] text-white p-2 fixed bottom-1 right-2 md:p-4 md:bottom-4 md:right-4 z-50 cursor-pointer transition-opacity duration-500 ${showButton ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <FontAwesomeIcon icon={faArrowUp} className=""/>
    </button>
  )
}

export default ScrollToTop
