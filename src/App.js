import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount ] = useState(0)
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)} >
        Click!
      </button>
      <button onClick={() => setCount(0)}>
        Reset!
      </button>
    </div>
  );
}

export default App;
