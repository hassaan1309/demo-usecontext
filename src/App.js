import logo from './logo.svg';
import './App.css';
import Parent from './Parent.js'
import { useState } from 'react';

function App() {
  let [number, setnumber] = useState(25);
  return (
    <div>
      Hello World.
      <Parent num = {number}></Parent>
      <br/>
      <button onClick = {() => {setnumber(++number)}}>Update Age</button>
    </div>
  );
}

export default App;
