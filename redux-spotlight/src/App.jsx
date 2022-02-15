import React from 'react';
import './App.css';
import Counter from './views/Counter/Counter';
import DarkModeToggle from './Components/DarkMode/DarkModeToggle';
export default function App() {
  return (
    <div className="App">
      <div className="navbar">
        <DarkModeToggle />
      </div>
      <Counter />
    </div>
  );
}
