import React from 'react';
// import useCountDown from './useCountDown';
import useCountDown from './useCountDown/reducer';

function App() {
  const { remain, start, pause, reset } = useCountDown(5);
  return (
    <div className="App">
      <p>{remain}</p>
      <button onClick={start}>start</button>
      <button onClick={pause}>pause</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default App;
