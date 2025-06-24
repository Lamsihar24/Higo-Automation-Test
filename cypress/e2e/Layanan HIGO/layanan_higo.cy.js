describe('Higo.id Service Pages', () => {
    beforeEach(() => {
        cy.visit('https://higo.id');
        cy.get('nav').should('be.visible');
        cy.get('nav')
            .contains('Layanan HIGO')
            .trigger('mouseover');
      });

    it('Visits WiFi Advertising page and verifies content', () => {
        cy.wait(2000);
        cy.get("body > header > div > div > nav > ul > li:nth-child(2) > ul > li:nth-child(1) > label.peer-checked\:hidden > a > span").click().wait(2000);
        cy.contains('WiFi Advertising', { timeout: 10000 }).should('be.visible');
        cy.scrollTo('bottom', { duration: 2000 });
        //cy.contains('Hubungi Kami').should('be.visible'); 
    });
  
    // it('Visits HIGOspot page and verifies content', () => {
    //   cy.visit('https://higo.id/higo-spot');
    //   cy.contains('HIGOspot', { timeout: 10000 }).should('be.visible');
    //   cy.scrollTo('bottom', { duration: 2000 });
    //   cy.contains('Gratis').should('exist'); // Atau teks khas di halaman ini
    // });
  
    // it('Visits Integrated Digital Agency page and verifies content', () => {
    //   cy.visit('https://higo.id/integrated-digital-agency');
    //   cy.contains('Integrated Digital Agency', { timeout: 10000 }).should('be.visible');
    //   cy.scrollTo('bottom', { duration: 2000 });
    //   cy.contains('Strategi Digital').should('exist'); // Sesuaikan
    // });
  
  });
  