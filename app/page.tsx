'use client';
import { useState } from 'react';
import TodoList from '../components/TodoList';

const Home = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Aprender Next.js', completed: false },
    { id: 2, text: 'Crear una todo app', completed: false },
    { id: 3, text: '¡Diviértete!', completed: false },
  ]);
  const [inputValue, setInputValue] = useState('');

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: inputValue.trim(),
          completed: false,
        },
      ]);
      setInputValue('');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Lista de tareas</h1>
      <div className="mb-4">
        <input
          type="text"
          className="border border-gray-300 rounded px-4 py-2 w-full text-slate-800"
          placeholder="Agregar nueva tarea"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white font-semibold px-4 py-2 mt-2 rounded"
          onClick={handleAddTodo}
        >
          Agregar
        </button>
      </div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
};

export default Home;