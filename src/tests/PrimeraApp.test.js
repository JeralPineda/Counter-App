import React from 'react';
// import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

import PrimeraApp from '../PrimeraApp';

describe('Prueba en <PrimeraApp />', () => {
   // Con la de crate-react-app
   /**  test('debe de mostrar el mensaje "Holas, soy Jeral"', () => {
      const saludo = 'Hola, soy Jeral';

      //    Renderizar el componente de react
      const { getByText } = render(<PrimeraApp saludo={saludo} />);

      expect(getByText(saludo)).toBeInTheDocument();
   }); **/

   //    Con enzyme
   test('debe de mostrar <PrimeraApp /> correctamente', () => {
      const saludo = 'Hola, soy Jeral';

      const wrapper = shallow(<PrimeraApp saludo={saludo} />);

      expect(wrapper).toMatchSnapshot();
   });

   test('debe de mostrar el subtitulo enviado por props', () => {
      const saludo = 'Hola, soy Jeral';
      const subtitulo = 'Soy Jeral Pineda';

      const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitulo} />);

      //   Revisaremos el párrafo que contiene el subtitulo
      const textoParrafo = wrapper.find('p').text();

      expect(textoParrafo).toBe(subtitulo);
   });
});
