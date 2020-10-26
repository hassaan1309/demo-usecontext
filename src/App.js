import logo from './logo.svg';
import './App.css';
import Parent from './Parent';
import ValueContext from './ValueContext';
import { useState } from 'react';

function App() {
//  let [number, setnumber] = useState(25);
//let val = 81;
let val = useState(48);
  return (
    <ValueContext.Provider value={val}>
    <div>
      Hello World.
      <Parent></Parent>      
    </div>
    </ValueContext.Provider>
  );
}

export default App;
