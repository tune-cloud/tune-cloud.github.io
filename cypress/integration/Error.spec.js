['macbook-11', 'iphone-8'].forEach((size) => {
    describe(`Errors on ${size}`, () => {
        beforeEach(()=> {
            cy.viewport(size)
            cy.visit('#/artist?artistId=-9&artist=None');
        });

        it('should navigate to error page if error occurs', ()=>{
            cy.get('img').should("have.attr", 'alt',  'cartoon cloud crying');
        });

        it('should have link to github issues', ()=>{
            cy.get('a').should("have.attr", 'href',  'https://github.com/tune-cloud/tune-cloud.github.io/issues');
        });
    });
});
