import { useState } from 'react';
import './App.css';
import Counter from './Counter';

function App() {
  const [check, setCheck] = useState('You need to click more!');
  return (
    <div className='App'>
      <Counter check={check} setCheck={setCheck} />
    </div>
  );
}

export default App;
