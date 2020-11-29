import {getUser, getUsuarioActivo} from '../../base-pruebas/05-funciones';

describe('Tests in 05-funciones', () => {
    
    test('getUser should return an object', () => {
        const userObject = {
            uid: 'ABC123',
            username: 'El_Pibe1502'
        };

        const user = getUser();
        
        expect(user).toEqual(userObject); // ==, valida que ambos objetos tienen los mismos key:value
    });

    test('getUsuarioActivo should return an object', () => {
     
        const activeUser = getUsuarioActivo('Rodrigo')

        //expect(activeUser).toEqual(userObject);
        expect(activeUser).toEqual({
            uid: 'ABC567',
            username: 'Rodrigo'
        });
    });
});