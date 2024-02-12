import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './state/Store.jsx'
import { store2 } from './state2/store.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
  <Provider store={store}>
    <Provider store={store2}>
    <App />
    </Provider>

  </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
