import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import Error from './pages/Error';

export default function App() {
  return <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/cocktail/:id" element={<SingleCocktail/>}/>
      <Route path="/*" element={<Error/>}/>
    </Routes>
  </BrowserRouter>
}
