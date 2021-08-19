import {useEffect, RefObject} from 'react'

type AnyEvent = MouseEvent | TouchEvent

export const useOnClickOutSide = (ref: RefObject<HTMLDivElement>  , handler: (event: AnyEvent) => void ) => {
    useEffect(() => {
       const listener = (event: AnyEvent) => {
          if (!ref.current || ref.current.contains(event.target as Node)) {
            return;
        }
        handler(event);
    };
    
    document.addEventListener('mousedown', listener);
    document.addEventListener(`touchstart`, listener)
    return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener(`touchstart`, listener)
    };
  }, [ref, handler]);
};