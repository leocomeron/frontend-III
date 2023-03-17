import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Characters from './components/Characters'
import Locations from './components/Locations'
import Episodes from './components/Episodes'
import Character from './components/Character'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>   
          <Route path='/characters' element={<Characters />} />
          <Route path='/characters/:name' element={<Character />} />
          <Route path='/locations' element={<Locations />} />
          <Route path='/episodes' element={<Episodes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
