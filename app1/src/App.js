import React, { Suspense, useState } from 'react';
import { useLazyModuleFederation } from 'use-lazy-module-federation';
import useInterval from 'app2/useInterval';

const App = () => {
  const { Component: RemoteComponent, errorLoading } = useLazyModuleFederation({
    url: 'http://localhost:3002/remoteEntry.js',
    scope: 'app2',
    module: './App',
  });

  const [showApp2, setShowApp2] = useState(false);

  const [counter, setCounter] = useState(0);

  useInterval(() => {
    setCounter(counter + 1);
  }, 1000);

  return (
    <div>
      <div
        style={{
          margin: '10px',
          padding: '10px',
          textAlign: 'center',
          backgroundColor: 'greenyellow',
        }}
      >
        <h1>App1</h1>
        <button onClick={() => setShowApp2((prevState) => !prevState)}>
          {showApp2 ? 'hidde App2' : 'show App2'} {counter}
        </button>
      </div>
      {showApp2 && (
        <Suspense fallback="Loading System">
          {errorLoading
            ? `Error loading module "${module}"`
            : RemoteComponent && <RemoteComponent title="App2" />}
        </Suspense>
      )}
    </div>
  );
};

export default App;
