import React from 'react'
import Home from '../src/Components/Routes/Home'
import About from './Components/Routes/About';
import Coin from './Components/Routes/Coin';
import Signup from './Components/Routes/Signup';
import Faq from '../src/Components/Routes/Faq'
import "./style.css";
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Raisequery from './Components/Routes/Raisequery';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/coins' element={<Coin/>} />
          <Route path='/Faq' element={<Faq/>}/>
          <Route path='/raiseAquery' element={<Raisequery/>}/>
          <Route path='/signup' element={<Signup />}/>
        </Routes>
      </BrowserRouter>
      
      
      
    </div>
  )
}

export default App