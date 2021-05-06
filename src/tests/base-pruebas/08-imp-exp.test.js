import { getHeroeById, getHeroesByOwner } from '../../base-pruebas/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de héroes', () => {
   test('debe de retornar un héroe por id', () => {
      const id = 1;

      const heroe = getHeroeById(id);

      const heroeData = heroes.find((h) => h.id === id);

      expect(heroe).toEqual(heroeData);
   });

   // Si no existe el Id
   test('debe de retornar undefined si heroe no existe', () => {
      const id = 10;

      const heroe = getHeroeById(id);

      expect(heroe).toBe(undefined);
   });

   // Debe retornar un arreglo con los heroes de DC
   //owner
   // toEqual al arreglo filtrado
   test('Debe de retornar un heroe de DC', () => {
      const owner = 'DC';

      const heroes = getHeroesByOwner(owner);

      //   creamos un arreglo para evaluar si son iguales
      const heroesData = heroes.filter((h) => h.owner === owner);

      expect(heroes).toEqual(heroesData);
   });

   // Debe de retornar un arreglo con los heroes de Marvel
   test('Debe de retornar un heroe de Marvel', () => {
      const owner = 'Marvel';

      const heroes = getHeroesByOwner(owner);

      //   creamos un arreglo para evaluar si son iguales
      //   const heroesData = heroes.filter((h) => h.owner === owner);

      expect(heroes.length).toEqual(2);
   });
});
