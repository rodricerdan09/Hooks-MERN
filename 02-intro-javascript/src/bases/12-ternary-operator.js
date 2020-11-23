/* eslint-disable no-unused-vars */
// Ternary Operator

const active = true;

/* 
let message;
    if (active){
        message = 'Active';
    } else {
        message = 'Inactivo';
    } 
*/

// const message = (active) ? 'Activo' : 'Inactivo';

const message = active && 'Active' // True

const noMessage = !active && 'Inactivo' // False