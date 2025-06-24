/// <reference types="Cypress" />
import "cypress-xpath";
import modal from "../../object/modal/modal";

describe('Download Digital Reports - Higo.id', () => {
    beforeEach(() => {
        cy.visit('https://higo.id');
        cy.wait(1000);
        cy.get('nav').should('be.visible');
        cy.get('nav').within(() => {
            cy.contains('Digital Reports').click();
        });

    });

    it('should visit homepage and go to Digital Reports page', () => {
        cy.get("body > div > div > div > button > svg > path:nth-child(2)").click();
        cy.wait(1000);
        cy.get("body > main > .grid-full > div > div > div > button:nth-child(1) > div.grid.content-start.gap-4 > div.relative.grid.h-60.place-content-center.rounded-md > div > img").click().wait(2000);
        //cy.scrollTo('bottom', { duration: 3000 });
        cy.get(modal.firstName).type('Lamsihar');
        cy.get(modal.lastName).type('Sirait');
        cy.get(modal.emailAddress).type('lamsihar@gmail.com');
        cy.get(modal.whatsapp).type('082272515236');
        cy.get(modal.companyName).type('Higo');
        cy.get(modal.jobTitle).type('QA Engineer');
        cy.wait(5000);

        //automation tidak dapat dilakukan untuk verifikasi captcha
        cy.get("#PKVDd5 > div > label > input[type=checkbox]").click().wait(3000);

        // Klik tombol submit
        cy.get("#radix-\:Rqfnjbta\: > div > form > div.mt-3.flex.flex-row.items-center.gap-5 > button").click();

        // Verifikasi respons atau pesan sukses
        cy.get("#radix-\:ro\: > div > form > div.mt-3.flex.flex-row.items-center.gap-5 > button").click();
    });
});