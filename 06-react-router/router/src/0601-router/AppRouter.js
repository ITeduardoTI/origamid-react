import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Sobre from './Sobre';
import Contato from './Contato';
import Login from './Login';
import Produto from './Produto';
import NaoEncontrado from './NaoEncontrado';
import Header from './Header';

const AppRouter = () => {
  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='sobre' element={<Sobre />} />
        <Route path='contato' element={<Contato />} />
        <Route path='login' element={<Login />} />
        <Route path='produto/:id/*' element={<Produto />} />
        <Route path='*' element={<NaoEncontrado />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;