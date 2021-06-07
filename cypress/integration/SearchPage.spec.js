
describe('SearchPage', ()=>{
    beforeEach(()=>{
       cy.visit('/');
    });

    it('has title', ()=>{
       cy.get('h1').should("have.text", 'Tune Cloud');
    });

    it('has search bar', ()=>{
       cy.get('input').should('have.attr', 'placeholder', 'Search for an artist');
    });

    it('can search', ()=>{
       cy.get('input').type('Bad Books');
       cy.wait(1000);
       cy.get('input').type('{enter}');
       cy.wait(3000);
       cy.get('li').first().click();
       cy.hash().should('eq', '#/artist?artistId=97829&artist=Bad%20Books');
    });
});
