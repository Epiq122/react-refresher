import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos/',
      );
      const data = await response.json();
      setTodos(data);
      console.log('USE EFFECT RAN');
    };
    fetchTodos();
  }, [count]);

  return (
    <div className='App'>
      <h1 onClick={() => setCount(count + 1)}>{count}</h1>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h3>{todo.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
