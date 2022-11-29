import React from 'react'
import { useParams, useLocation, Routes, Route, NavLink } from 'react-router-dom';
import ProdutoAvaliacoes from './ProdutoAvaliacoes';
import ProdutoCustomizado from './ProdutoCustomizado';
import ProdutoDescricao from './ProdutoDescricao';

const Produto = () => {
  const params = useParams();
  console.log(params);

  const location = useLocation();
  console.log(location);

  const search = new URLSearchParams(location.search);
  console.log(search.get('memoria'));

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to="">Descrição</NavLink>
        <NavLink to="avaliacoes">Avaliações</NavLink>
        <NavLink to="customizado">Costumizado</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<ProdutoDescricao />} />
        <Route path='avaliacoes' element={<ProdutoAvaliacoes />} />
        <Route path='customizado' element={<ProdutoCustomizado />} />
      </Routes>
    </div>
  )
}

export default Produto