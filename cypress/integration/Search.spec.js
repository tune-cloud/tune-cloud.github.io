
describe('Home Page', ()=>{
    context('Desktop view', ()=> {
        beforeEach(()=>{
            cy.viewport('macbook-15');
            cy.visit('/');
        });

        it('has logo', ()=>{
            cy.get('img').should("have.attr", 'alt',  'Tune Cloud');
        });

        it('has search bar', ()=>{
            cy.get('input').should('have.attr', 'placeholder', 'Search for an artist');
        });

        it('can search', ()=>{
            cy.get('input').type('Bad Books');
            cy.wait(5000);
            cy.get('input').type('{enter}');
            cy.wait(5000);
            cy.get('li').first().click();
            cy.hash().should('eq', '#/artist?artistId=97829&artist=Bad%20Books');
        });

        it('does not navigate to a new page when searching', () => {
            cy.get('input').type('Bad Books');
            cy.wait(5000);
            cy.hash().should('eq', '')
        })
    });

    context('Mobile view', ()=> {
        beforeEach(()=>{
            cy.viewport('iphone-8');
            cy.visit('/');
        });

        it('has logo', ()=>{
            cy.get('img').should("have.attr", 'alt',  'Tune Cloud');
        });

        it('has search bar', ()=>{
            cy.get('input').should('have.attr', 'placeholder', 'Search for an artist');
        });

        it('can search', ()=>{
            cy.get('input').type('Bad Books');
            cy.wait(5000);
            cy.get('input').type('{enter}');
            cy.wait(5000);
            cy.get('li').first().click();
            cy.hash().should('eq', '#/artist?artistId=97829&artist=Bad%20Books');
        });

        it('navigates to a new page when searching', () => {
            cy.get('input').type('Bad Books');
            cy.wait(5000);
            cy.hash().should('eq', '#/search')
        })
    });
});
