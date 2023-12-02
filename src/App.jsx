import React from 'react';
import "./styles/index.scss";
import Header from './components/Header';
import Identity from './components/Identity';

const App = () => {
  
  return (
    <>
      <Header/>
      <div>
        <Identity/>
      </div>
    </>
  );
};

export default App;