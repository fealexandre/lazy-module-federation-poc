import React, { useState } from 'react';
import useInterval from './useInterval';

const App = ({ title }) => {
  const [counter, setCounter] = useState(0);

  useInterval(() => {
    setCounter(counter + 1);
  }, 1000);

  return (
    <div
      style={{
        margin: '10px',
        padding: '10px',
        textAlign: 'center',
        backgroundColor: 'cyan',
      }}
    >
      <h1>{title}</h1>
      <h2>{counter}</h2>
    </div>
  );
};

export default App;
