import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <App />
    <Footer/>
  </React.StrictMode>
)
