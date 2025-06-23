describe('Higo.id Service Pages', () => {

    it('Visits WiFi Advertising page and verifies content', () => {
        cy.visit('https://higo.id');
        cy.wait(1000);
        cy.get()
      cy.visit('https://higo.id/wifi-advertising');
      cy.contains('WiFi Advertising', { timeout: 10000 }).should('be.visible');
      cy.scrollTo('bottom', { duration: 2000 });
      cy.contains('Hubungi Kami').should('be.visible'); // Sesuaikan dengan CTA-nya
    });
  
    it('Visits HIGOspot page and verifies content', () => {
      cy.visit('https://higo.id/higo-spot');
      cy.contains('HIGOspot', { timeout: 10000 }).should('be.visible');
      cy.scrollTo('bottom', { duration: 2000 });
      cy.contains('Gratis').should('exist'); // Atau teks khas di halaman ini
    });
  
    it('Visits Integrated Digital Agency page and verifies content', () => {
      cy.visit('https://higo.id/integrated-digital-agency');
      cy.contains('Integrated Digital Agency', { timeout: 10000 }).should('be.visible');
      cy.scrollTo('bottom', { duration: 2000 });
      cy.contains('Strategi Digital').should('exist'); // Sesuaikan
    });
  
  });
  