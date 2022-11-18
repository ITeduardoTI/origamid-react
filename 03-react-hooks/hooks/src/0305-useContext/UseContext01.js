import React from 'react';
import Produto from './Produto';
import { GlobalStorage } from './GlobalContext';

const UseContext01 = () => {
  return (
    <GlobalStorage>
      <Produto /> 
    </GlobalStorage>
  );
}

export default UseContext01;