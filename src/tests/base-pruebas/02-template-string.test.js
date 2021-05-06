// Usar la ayuda de jest
// import '@testing-library/jest-dom'

import { getSaludo } from '../../base-pruebas/02-template-string';

describe('Pruebas en 02-template-string.js', () => {
   test('getSaludo debe de retornar Hola Jeral', () => {
      const nombre = 'Jeral';

      const saludo = getSaludo(nombre);

      expect(saludo).toBe('Hola ' + nombre);
   });

   // getSaludo debe retornar Hola Cris si no hay argumento en el nombre
   test('getSaludo debe retornar Hola Cris si no tiene argumento', () => {
      const saludo1 = getSaludo();

      expect(saludo1).toBe('Hola Cris');
   });
});
