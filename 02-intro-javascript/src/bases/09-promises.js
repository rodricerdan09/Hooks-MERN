// Promises
/**
 * Las promesas por naturaleza son asincronas, primero se va a ejecurar todo el codigo sincrono
 * y las promeas caen en un lugar especial en el stack de JS
 * Una vez que se ejecute todo el codigo sincrono, se ejecutan los resultados de las promesas
 */
import {getHeroeById} from './bases/08-import-export';

/* const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log('2 seconds after');
        // resolve();
        const heroe = getHeroeById(2);
        console.log(heroe);
    }, 2000);
});

promise.then((heroe) => {
    console.log('Heroe', heroe);
})
.catch(err => console.warn(err)); */

const getHeroesByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log('2 seconds after');
            // resolve();
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe);
            } else {
                reject('No se pudo encontrar el heroe');
            }
        }, 2000);
    });
    
}

getHeroesByIdAsync(1)
    .then(heroe => console.log('Heroe', heroe))
    .catch(err => console.warn(err));