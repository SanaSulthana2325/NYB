import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from "./components_07-07-2026/Redux_14-07-2026/Counter3_14-07-2026/Store";


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
        
        <App />
        
      </Provider>
    </React.StrictMode>
    )
