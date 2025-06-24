describe('Navigate from Homepage to About Us - Higo.id', () => {
    it('should visit homepage and go to About Us page', () => {
      cy.visit('https://higo.id');
      cy.wait(1000);
      cy.get('nav').should('be.visible');
      cy.get('nav').within(() => {
        cy.contains('Tentang HIGO').click();
      });
      cy.wait(1000);
      cy.contains('Tentang HIGO').should('exist'); 
      cy.scrollTo('bottom', { duration: 3000 });
    });
  });