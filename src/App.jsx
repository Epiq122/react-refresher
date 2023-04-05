import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [text, setText] = useState('Welcome to my nightmare');
  const updateTextHandler = () => {
    setText('Updated!');
  };

  return (
    <div className='App'>
      <h1>{text}</h1>
      <button onClick={updateTextHandler}>Update Me</button>
    </div>
  );
}

export default App;
