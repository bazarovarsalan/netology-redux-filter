import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={configureStore()}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>
)
