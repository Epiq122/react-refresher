// VANILLA JAVASCRIPT
{
  /* <div>
  <h1>Hello There</h1>
  <button>Update Me</button>
  <h2>Counter</h2>
</div>;
const title = document.querySelector('h1');
const button = document.querySelector('button');
const counter = document.querySelector('h2');
let count = 0;

button.addEventListener('click', () => {
  title.textContent = 'Updated!';
  count++;
  counter.textContent = count;
}); */
}

import { useState } from 'react';

// REACT
function App() {
  const [title, setTitle] = useState('Title Changed!');
  const [count, setCount] = useState(0);

  const updateTextHandler = () => {
    setTitle('Updated from handler');
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={updateTextHandler}>Update Me</button>

      <h2>{count}</h2>
    </div>
  );
}

export default App;
