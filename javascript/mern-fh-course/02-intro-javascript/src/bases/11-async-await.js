// CASE 1
const getPromiseImage1 = () => {
  return new Promise((resolve, reject) => {
    resolve("https//example1.com");
  });
};
getPromiseImage1().then(console.log);

// CASE 2
const getPromiseImage2 = () =>
  new Promise((resolve) => resolve("https//example2.com"));
getPromiseImage2().then(console.log);

// AWAIT ayuda a trabajar el codigo como si fuera sincrono
// FETCH retorna una promesa que resuelve una response
// el AWAIT indica que la promesa del fetch() termine antes de ejecutar la siguiente linea de codigo, una vez terminada el codigo es sincrono
// se coloca AWAIT delante de lo que retorna una promesa
// NO se usa el await sin el async, pero puede usarse el async sin el await
// en ASYNC-AWAIT se usa TRY y CATCH para manejar los errores

// CASE 3
const getImage = async () => {
  try {
    const apiKey = "sATnXdpaU1KVISuaFSELqW01mjSjN6KU";
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await response.json(); // el json() retorna una promesa, se espera que se resuelva la promesa para obtener la data
    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.error(error);
  }
};

getImage();
