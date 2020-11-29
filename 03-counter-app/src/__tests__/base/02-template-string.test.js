import {getSaludo} from '../../base-pruebas/02-template-string'


describe('Tests in 02-template-string', () => {
    
    test('should return a greeting', () => {
        const name = "Rodrigo";

        const greeting = getSaludo(name);
        console.log(greeting);

        expect(greeting).toBe('Hola '+ name);

    });

    test('should return Hola Carlos if there not name argument', () => {
        const greeting = getSaludo();
        console.log(greeting);

        expect(greeting).toBe('Hola Carlos');
    });
});