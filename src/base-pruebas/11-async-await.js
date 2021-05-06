// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async () => {
   try {
      const apiKey = 'yfxK1j1iSVjkUj0lGKX2RKL8Oqyu0svM';
      const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
      const { data } = await resp.json();

      const { url } = data.images.original;

      return url;
   } catch (error) {
      // manejo del error
      console.error(error);
   }
};

getImagen();
