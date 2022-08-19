import React from 'react';

const App = ({ title }) => {
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
    </div>
  );
};

export default App;
