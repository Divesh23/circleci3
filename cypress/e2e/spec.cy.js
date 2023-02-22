describe('test spec', () => {
    it('passes', () => {
        cy.visit('/');
        cy.url().should('include', 'google');
    })
    it('fails', () => {
        cy.visit('/');
        cy.url().should('eq', 'google');
    })
})