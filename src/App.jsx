import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import { Routes, Route } from 'react-router-dom'
import Homepage from './page/Homepage'

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Homepage/>} />
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App
