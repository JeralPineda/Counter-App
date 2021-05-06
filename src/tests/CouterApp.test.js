import React from 'react';
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';

describe('Prueba en <CounterApp />', () => {
   let wrapper = shallow(<CounterApp />);

   beforeEach(() => {
      //usamos de nuevo esta linea del wrapper para que de el valor de nueve, sin esto no daria porque las pruebas se ejecutan en secuencia y segun la prueba anterior el valor aumento a 11 por lo que su actual valor seria 10 al decrementar
      wrapper = shallow(<CounterApp />);
   });

   test('debe de mostrar <CounterApp /> correctamente', () => {
      expect(wrapper).toMatchSnapshot();
   });

   test('debe devolver el valor de <h1>100</h1>', () => {
      const wrapper = shallow(<CounterApp value={100} />);

      const texto = wrapper.find('h2').text();

      expect(texto).toBe('100');
   });

   test('debe de decrementar con el botón de +1', () => {
      //    Trabajaremos con los botones en base a su posición indice 0, 1, 2
      wrapper.find('button').at(0).simulate('click');

      const counterText = wrapper.find('h2').text();

      expect(counterText).toBe('11');
   });

   test('debe de incrementar con el botón de -1', () => {
      wrapper.find('button').at(2).simulate('click');

      const counterText = wrapper.find('h2').text();

      expect(counterText).toBe('9');
   });

   test('debe de resetear al valor por defecto con el botón de Reset', () => {
      const wrapper = shallow(<CounterApp value={105} />);

      wrapper.find('button').at(0).simulate('click');
      wrapper.find('button').at(0).simulate('click');

      wrapper.find('button').at(1).simulate('click'); //botón reset

      const counterText = wrapper.find('h2').text();

      expect(counterText).toBe('105');
   });
});
