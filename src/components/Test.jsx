import React from 'react';
import { careers } from '../data/careers';
import Career from './Career';

const Test = () => {
    return (
      <div className="App">
        <h1>Careers</h1>
        {/* Render each career */}
        {careers.map((career, index) => (
          <Career key={index} career={career} />
        ))}
      </div>
    );
  };
  
  export default Test;