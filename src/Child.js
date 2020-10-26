import React, { useContext } from 'react';
import ValueContext from './ValueContext';

function Child() {
    
  let val = useContext(ValueContext);
  return (
    <div>
      Child age is {val[0]} years.
      <br/>
      <button onClick = {() => {val[1](++val[0])}}>Update Value</button>
    </div>
  );
}

export default Child;
