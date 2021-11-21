import { useState, useRef } from 'react';

function useCountDown(second = 0) {
  const [remain, setRemain] = useState(second);
  const clock = useRef();

  const tick = () => {
    setRemain((prev) => {
      if (prev === 0) {
        clearInterval(clock.current);
        return 0;
      }
      return prev - 1;
    });
  };

  const start = () => {
    if (clock.current) return;
    clock.current = setInterval(tick, 1000);
  };
  const pause = () => {
    clearInterval(clock.current);
    clock.current = null;
  };
  const reset = () => {
    setRemain(second);
  };

  return { remain, start, pause, reset };
}

export default useCountDown;
