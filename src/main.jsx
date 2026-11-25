import { StrictMode } from 'react'
import { BrowserRouter} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.main.css'
import 'bootstrap/dist/js/bootstrap.bundle.main.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

ReactDom.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <BrowserRouter/>
  </StrictMode>,
)
