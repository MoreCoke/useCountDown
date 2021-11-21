import { useState, useRef } from 'react';

function useCountDown(second = 0) {
  const [remain, setRemain] = useState(second);
  const clock = useRef();

  const tick = () => {
    if (remain === 0) return;
    setRemain((prev) => prev - 1);
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
