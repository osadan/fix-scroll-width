import React from 'react';
import styled from 'styled-components';
import './App.css';
import Comp1 from './Comp1/Comp1';
import FuncComp from './FuncComp/FuncComp';

const AppContext = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:99vw;
  height:99vh;
`

function App() {
  return (
    <AppContext>
      <Comp1 tmp="1"></Comp1>
      <FuncComp tmp="2" />
    </AppContext>
  );
}

export default App;
