//FC
import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({ saludo, subtitulo }) => {
   return (
      <>
         {/* <pre>{JSON.stringify(saludo, null, 3)}</pre>0 */}
         <h1>{saludo}</h1>
         <p>{subtitulo}</p>
      </>
   );
};

// Obligamos a que se mande la popiedad saludo
PrimeraApp.propTypes = {
   saludo: PropTypes.string.isRequired,
};

// DefaulProps
PrimeraApp.defaultProps = {
   subtitulo: 'Soy Jeral Pineda',
};

export default PrimeraApp;
