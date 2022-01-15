['macbook-11', 'iphone-8'].forEach((size) => {
    describe(`Word Cloud Page on ${size}`, ()=>{
        beforeEach(() => {
            cy.viewport(size);
            cy.visit('#/artist?artistId=97829&artist=Bad%20Books');
        });

        it("has artist's name", ()=>{
            cy.get('h1').should('have.text', "Bad Books");
        });

        it("has word cloud of artist's songs", ()=>{
            cy.contains("Holding Down the Laughter");
            cy.contains("It Never Stops");
        });
    });
});
