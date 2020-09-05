import React from 'react';
import './App.css';
import Sidebar from './Component/Sidebar'
import Chat from './Component/Chat'

function App() {
  return (
    <div className="app">
      
      <div className="app-body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
