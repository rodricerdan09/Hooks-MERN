describe('Tests in demo.test.js file', () => {
    test('strings should be equals', () => {
      
        //  1. Inicialization
        const message = 'Hello World'; 
    
        //  2. Incentive (estimulo)
        const message2 = 'Hello World';
    
        // 3. Watch the behavior
        expect(message).toBe(message2); // ===
    });
});