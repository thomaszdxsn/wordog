import {useEffect} from 'react';


export function usePercentScrollAsTitle () {
  useEffect(() => {
    if (!process.browser) {
      return
    }
    const originTitle = document.title;
    const listener = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);
      const scrollPercentRounded = Math.round(scrollPercent * 100);
      document.title = `(${scrollPercentRounded <= 100 ? scrollPercentRounded : 100}%) ${originTitle}`;
    };
    window.addEventListener('scroll',  listener);
    return () => window.removeEventListener('scroll', listener);
  }, [process.browser])
}