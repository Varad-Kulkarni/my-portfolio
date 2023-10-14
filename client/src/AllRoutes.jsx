import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Projects from './Pages/Projects/Projects'

import DataFiller from './components/DataFiller/DataFiller'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element = { <Home/> }/>
      <Route path='/about' element = { <About/> } />
      <Route path='/projects' element = { <Projects/> } />

      <Route path='/about/experience' element = { <DataFiller/> } />
    </Routes>
  )
}

export default AllRoutes