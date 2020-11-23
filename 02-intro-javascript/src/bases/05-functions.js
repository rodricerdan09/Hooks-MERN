//Functions in JS

function greeting(name) {
    return `Hola, ${ name }`;
};
/**
 * NO es recomendable utilizar este tipo de sintaxis para crear funciones, ya que
 * es muy facil caer en el error de realizar una reasignacion a la referencia del espacio de memoria 
 * donde esta almacenada dicha funcion
 * Ej; saludar = 30, esto va a ser que el valor de 30 se almacene en la referencia donde actualmente esta la funcion.
 */

const greeting2 = (name) => `Hola, ${ name }`;
const greeting3 = (name) => `Hola Mundo`;

console.log(greeting('Goku'));
console.log(greeting2('Vegeta'));
console.log(greeting3());

// Funcion flecha que retorna un objeto implicito.
const getUser = () => (
    {
        uid: 'ABC123',
        username: 'El_user1502'
    }
);
const user = getUser();
console.log(user);

const getActiveUser = (name) => (
    {
        uid:'ABS567',
        useername: name
    }
);
const activeUser = getActiveUser('Rodrigo');
console.log(activeUser);
