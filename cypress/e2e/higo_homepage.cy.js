describe('Navigate from Homepage to About Us - Higo.id', () => {
    it('should visit homepage and go to About Us page', () => {

      cy.visit('https://higo.id');
  
      cy.get('nav').should('be.visible');
  
      cy.contains('About Us').click();
  
      cy.url().should('include', '/about-us');
  
      cy.contains('Tentang Kami').should('Tentang HIGO'); 
    });
  });
  