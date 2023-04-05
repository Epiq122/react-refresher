import { useState } from 'react';

export default function Counter() {
  // Js Logic, creating functions,adding state etc
  const [counter, setCounter] = useState(0);
  const counterHandler = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={counterHandler}>Increment</button>
    </div>
  );
}
