import { useState } from 'react';

export default function Counter({ check, setCheck }) {
  // Js Logic, creating functions,adding state etc
  const [counter, setCounter] = useState(0);

  const counterHandler = () => {
    setCounter(counter + 1);
    if (counter >= 5) setCheck('Stop, you clicked enough');
  };
  return (
    <div>
      {counter < 5 ? <h1>Counter is to low</h1> : <h1>Counter is higgggh</h1>}
      <h1>{check}</h1>
      {counter > 5 && <h1>WOOOO</h1>}
      <h1>{counter}</h1>
      <button onClick={counterHandler}>Increment</button>
    </div>
  );
}
