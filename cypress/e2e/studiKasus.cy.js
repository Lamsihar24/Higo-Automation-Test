describe('Navigate from Homepage to Case Study - Higo.id', () => {
    beforeEach(() => {
        cy.visit('https://higo.id');
        cy.get('nav').should('be.visible');
        cy.get('nav').within(() => {
          cy.contains('Studi Kasus').click();
        });
      });

    it('Should Open All Studi Kasus', () => {
        cy.wait(2000);
        cy.scrollTo('bottom', { duration: 2000 });
    }); 

    it('Should Open HIGOspot Studi Kasus', () => {
        cy.wait(2000);
        cy.get("body > main > .grid-content > .flex > li:nth-child(2)").click().wait(2000);
        cy.scrollTo('bottom', { duration: 2000 });
    });

    it('Should Open WiFi Advertising Studi Kasus', () => {
        cy.wait(2000);
        cy.get(".grid-content > .flex > li:nth-child(3)").click().wait(2000);
        cy.scrollTo('bottom', { duration: 2000 });
    });
});