import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import YoLocator from './YoLocator'
// import YoTracker from './YoTracker'
// import Home from './Home'
import  YoAfrica from './YoAfrica'
// import  Login from  './Login'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <YoAfrica/>
  </StrictMode>,
)
