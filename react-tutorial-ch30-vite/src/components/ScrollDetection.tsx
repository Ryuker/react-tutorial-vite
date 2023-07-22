import { useEffect, useState} from 'react';

function ScrollDetection () {
  const [scrollY, setScrollY] = useState(0);

  function handleWindowScroll(){
    setScrollY(window.scrollY);
  }

  useEffect(() => {
    const opts: AddEventListenerOptions & EventListenerOptions = { passive: true };
    window.addEventListener("scroll", handleWindowScroll, opts);
    
    return () => {
      window.removeEventListener("scroll", handleWindowScroll, opts);
    }
  });

  return <p>Detecting scroll - scroll y: {scrollY} </p>

}

export default ScrollDetection;