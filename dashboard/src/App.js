import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './User';
import Order from './Order';

function App() {
  const [toggle, setToggle] = useState(false);
  function Toggle(){
    setToggle(!toggle);
  }

  useEffect(() => {
    const handleSize = () => {
      if(window.innerWidth > 768){
        setToggle(false);
      }
    }

      window.addEventListener('resize', handleSize);

      return () => {
        window.removeEventListener('resize', handleSize);
      }
    

  },[])

  return (
    <BrowserRouter>
    <div className='d-flex'>
      <div className={toggle ? "d-none" : "w-auto position-fixed"} >
          <Sidebar />
      </div>
      <div className={toggle ? "d-none" : "invisible"} >
          <Sidebar />
      </div>
      <div className = 'col overflow-auto'>
      <Navbar Toggle={Toggle} />
          <Routes>
            <Route path='/' element={<><Home/></>}></Route>
            <Route path='/users' element={<><User/></>}></Route>
            <Route path='/orders' element={<><Order/></>}></Route>
          </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
