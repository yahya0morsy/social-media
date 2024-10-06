import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter,HashRouter, Routes, Route } from "react-router-dom";
import Home from './home'
import Profile from './profile';
import Sign from './sign';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={  <Sign/>}/>
        <Route path="/home" element={  <Home/>}/>
        <Route path="/profile" element={  <Profile/>}/>
        
      </Routes>
    
   
  )
}
export default App
