import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { BrowserRouter } from 'react-router-dom'
import { DarkTheme } from './components/Navbar/ThemeContext.jsx';
import { ThemeProvider } from "@material-tailwind/react"
import { AuthProvider } from './context/auth.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <DarkTheme>
    <ThemeProvider>
    <App  />
    </ThemeProvider>
    </DarkTheme>
  </React.StrictMode>,
)
