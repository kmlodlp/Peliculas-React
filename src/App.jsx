import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { NavBarApp } from './component/NavBarApp'
import { BestMovieApp } from './pages/BestMovieApp'
import { PremiereApp } from './pages/PremiereApp'
import { useService } from './hooks/useService'

export const App = () => {
  const {Estrenos } = useService ();

  console.log("Estrenos", Estrenos)
  
  return (
    <>
    <NavBarApp />
    <Routes>
    <Route exact path='/' element={<PremiereApp></PremiereApp>}> </Route>
    <Route exact path='/MejoresCalificadas' element={<BestMovieApp></BestMovieApp>}> </Route>
    <Route exact path='/Cartelera' element={<PremiereApp></PremiereApp>}> </Route>
    <Route exact path='/Populares' element={<BestMovieApp></BestMovieApp>}> </Route>
   </Routes>
    </>
  )
}
