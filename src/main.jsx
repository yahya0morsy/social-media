import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,HashRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>,
)
