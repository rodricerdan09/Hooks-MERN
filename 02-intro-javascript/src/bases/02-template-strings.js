// Objetos Literales

const persona = {
    name: 'Tony',
    lastname: 'Stark',
    age: 45,
    address: {
        city: 'New York',
        zipcode: 232323,
        lat:14.4343,
        lng: 34.5445
    },
};

console.log({ persona });
/*
El spread operator me permite hacer un clon o extraer cada una de las propiedades de un determinado objeto y agregarselas a un nuevo objeto.
Esto me permite crear una copia de un determinado objeto para tratarlo sin la preocupacion de modificar el objeto original (parametros por referencia).
*/
const persona2 = { ...persona};

console.log(persona);
console.log(persona2);