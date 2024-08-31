
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from '../src/store/index.js'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import ChatArea from './components/ChatArea.jsx'
import LandingPage from './components/LandingPage.jsx'
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store ={store}>
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/chat' element={<ChatArea/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
      </Routes>
    </Router>
  {/* <App /> */}
  </Provider>
     
)
