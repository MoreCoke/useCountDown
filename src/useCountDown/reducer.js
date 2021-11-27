import { useReducer, useEffect, useRef } from 'react';

const ACTION = {
  start: 'start',
  reset: 'reset',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION.start:
      return { second: state.second - 1 };
    case ACTION.reset:
      return { second: action.payload };
    default:
      new Error(`Error type: ${action.type}`);
  }
}

function useCountDown(second = 0) {
  const [state, dispatch] = useReducer(reducer, { second });
  const intervalID = useRef();

  useEffect(() => {
    if (state.second === 0) {
      clearInterval(intervalID.current);
    }
  }, [state.second]);

  const tick = () => {
    dispatch({ type: ACTION.start });
  };

  const start = () => {
    if (intervalID.current) return;
    intervalID.current = setInterval(tick, 1000);
  };

  const pause = () => {
    clearInterval(intervalID.current);
    intervalID.current = null;
  };

  const reset = () => {
    dispatch({ type: ACTION.reset, payload: second });
  };

  return { remain: state.second, start, pause, reset };
}

export default useCountDown;
