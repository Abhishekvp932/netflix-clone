import React from 'react'
import Login from './pages/login/login'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Player from './pages/Player/Player'
const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/player/:id' element={<Player/>} />
      </Routes>
    </div>
  )
}
 
export default App