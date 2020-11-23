//Arrays in JS

/*
const array = new Array( 100 );
No es recomendable utilizar el constructor a menos que se desee crear
un array con un numero determinado de elementos.
*/ 
/*
No es recomendable agregar elementos a un array utilizando el push
porque este modifica el array original, lo mejor es utilizar el spread operator
*/
const array = [1,2,3,4];

let array2 = [array, 5];
//array2.push(5);

let arrayNew = [ ...array, 5];

let array3 = arrayNew.map( function(number){
    return number*2;
});
/*
Si una funcion de JS no posee un return explicito, implicitamente retorna siempre un aundefined;
*/ 

console.log(array);
console.log(arrayNew);
console.log(array3);

