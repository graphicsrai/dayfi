import React from 'react'
import Bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import './App.css'
export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}
