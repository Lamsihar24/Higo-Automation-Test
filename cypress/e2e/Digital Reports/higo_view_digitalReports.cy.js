describe('View Digital Reports Pages - Higo.id', () => {
    it('should visit homepage and go to Digital Reports page', () => {
      cy.visit('https://higo.id');
      cy.wait(1000);
      cy.get('nav').should('be.visible');
      cy.get('nav').within(() => {
        cy.contains('Digital Reports').click();
      });
      cy.wait(1000);
      cy.scrollTo('bottom', { duration: 3000 });
    });
  });