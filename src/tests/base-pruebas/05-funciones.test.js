import { getUser, getUsuarioActivo } from '../../base-pruebas/05-funciones';

describe('Pruebas en 05-funciones.js', () => {
   test('debe de retornar un objeto', () => {
      const userTest = {
         uid: 'ABC123',
         username: 'El_Papi1502',
      };

      const user = getUser();

      expect(user).toEqual(userTest);
   });

   // getUsuarioActivo debe de retornar un objeto
   test('getUsuarioActivo debe de retornar un objeto', () => {
      const nombre = 'Jeral';

      const objeto = {
         uid: 'ABC567',
         username: nombre,
      };

      const usuario = getUsuarioActivo(nombre);

      expect(usuario).toEqual(objeto);
   });
});
