// Desestructuracion
// Asignacion Desestructurante

const person = {
    name:'Tony',
    age: 45,
    key: 'Ironman'
};

// Extraer lo que tengo en llaves del objeto que asigne.
// EL orden de los factores no altera el producto ;)
const {name:name2, age, key} = person;

console.log(name2);
console.log(age);
console.log(key);

// useContext solo retorna un objeto
const useContext = ({name:name2, age, key, rango= 'Captain'}) => {
    //console.log(name2, age);
    return {
        nameKey: key,
        years: age,
        latlng: {
            lat: 14.3434,
            lng: -12.3454
        }
    }
};
// eslint-disable-next-line react-hooks/rules-of-hooks
const {nameKey, years, latlng} = useContext(person);
const {lat, lng} = latlng;

console.log(nameKey, years);
console.log(lat, lng)

