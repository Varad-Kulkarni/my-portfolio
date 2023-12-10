import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Projects from './Pages/Projects/Projects'
import Auth from './Pages/Auth/Auth'

import DataFiller from './components/DataFiller/DataFiller'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element = { <Home/> }/>
      <Route path='/about' element = { <About/> } />
      <Route path='/projects' element = { <Projects/> } />

      <Route path='/about/experience' element = { <DataFiller/> } />
      <Route path='/about/education' element = { <DataFiller/> } />
      <Route path='/about/skills' element = { <DataFiller/> } />
      <Route path='/about/achievements' element = { <DataFiller/> } />

      <Route path='/auth/login' element = { <Auth/> } />
      <Route path='/auth/signup' element = { <Auth/> } />

      <Route path='/projects/add' element = { <DataFiller /> } />
    </Routes>
  )
}

export default AllRoutes