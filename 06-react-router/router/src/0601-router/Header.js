import React from 'react';
// import './Header.css'
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.log('Mudou de rota')
  }, [location]);

  return(
    <nav>
      <NavLink to="/" activeStyle={{ color: 'tomato' }} end>Home</NavLink>
      <NavLink to="sobre" activeStyle={{ color: 'tomato' }}>Sobre</NavLink>
      <NavLink to="login" activeStyle={{ color: 'tomato' }}>Login</NavLink>
      <h1>Esse aqui é o Header</h1>
    </nav>
  );
}

export default Header;