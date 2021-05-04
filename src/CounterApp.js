import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 0 }) => {
   const [counter, setCounter] = useState(0); //Retorna un arreglo con 2 valores

   // handleAdd
   const handleAdd = (e) => {
      setCounter(counter + 1);
      //   setCounter((c) => c + 1);
   };

   //Decremente
   const handleDelete = () => {
      if (counter > 0) setCounter(counter - 1);
   };

   //Restablesca al valor por defecto
   //    const handleReset = () => {
   //       if (counter > 0) setCounter(value);
   //    };

   return (
      <>
         <h1>ConterApp</h1>
         <h2>{counter}</h2>

         <button onClick={handleAdd}>+1</button>
         <button onClick={() => setCounter(value)}>Reset</button>
         <button onClick={handleDelete}>-1</button>
      </>
   );
};

CounterApp.propTypes = {
   value: PropTypes.number.isRequired,
};

export default CounterApp;
