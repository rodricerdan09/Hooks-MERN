// Destrunturacion de Arrays

const characters = ['Goku', 'Vegeta', 'Trunks'];

//para renombrar una variable utilizar f2 para cambiar la referencia
const [, , c3] = characters;
console.log(c3);

const returnArray = () => {
    return ['ABC', 123];
};
const [words, numbers] = returnArray();
console.log(words, numbers);

//Homework
const useState = (value) => {
    return [value, () => console.log('Hello World')]
};

// eslint-disable-next-line react-hooks/rules-of-hooks
const [name, setName] = useState('Goku');
console.log(name);
setName();
