import React from 'react';
import "./styles/index.scss";
import Header from './components/Header';
import Identity from './components/Identity';

const App = () => {
  
  return (
    <>
      <Header/>
      <form action="">
        <Identity/>
      </form>
    </>
  );
};

export default App;