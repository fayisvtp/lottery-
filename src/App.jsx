import React from 'react'
import './App.css'
import Banner from './assets/Banner'
import Numbers from './Numbers'
import {Toaster} from 'react-hot-toast'
import Payment from './Payment'
function App() {
  
  return (
    <>
      <Banner/>
      <Numbers/>
      <Toaster
      position="top-center"
      />
    
    </>
  )
}

export default App
