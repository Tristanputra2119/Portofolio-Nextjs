declare namespace Cypress {
interface Chainable<Subject = any> {
    fillOutForm(data: { name: string; email: string; message: string }): Chainable<Subject>;
}
    
}