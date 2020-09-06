import React, { useState } from 'react';
import './App.css';
import Sidebar from './Component/Sidebar'
import Chat from './Component/Chat'
import Login from './Component/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useGlobalState } from "./StateProvider"

function App() {

  const [{user}, dispatch] = useGlobalState()

  return (
    <div className="app">
      
      {!user ? (
        <Login/>
      ) : (
        <div className="app-body">
          <Router>
            <Sidebar />
            
            <Switch>  
              <Route path="/app/:convId">
                <Chat />
              </Route>
            </Switch>
          </Router>
        
        </div>
      )}
      
    </div>
  );
}

export default App;
