describe('Pruebas en el archivo demo.test.js', () => {
   test('Debe de ser iguales los string', () => {
      // 1. initialization
      const mensaje = 'Hola Mundo';

      // 2. estimulo
      const mensaje2 = `Hola Mundo`;

      // 3. Observar el comportamiento
      expect(mensaje).toBe(mensaje2); // == comparamos
   });
});
