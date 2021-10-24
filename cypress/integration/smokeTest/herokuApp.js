/// <reference types="cypress" />

describe('Accessing Heroku App', function(){
    beforeEach(() => {
     cy.fixture('testdata').then(function(data)  //data driven from fixture file
     {
        this.data=data   //this exposed data to the app page
     })
    })

    it('Login to Heroku App', function()
    {
      cy.visit(Cypress.env("url"));
      cy.url().should('contain', 'heroku');
      cy.get('#email').type(this.data.email);
      cy.get('#password').type(this.data.password);
      cy.xpath('//button[@name="commit"]').should('be.visible').click(); 
      cy.wait(10000)
      //cy.get('.context-toggle > .ml2').should('include.text','Personal');
    });
    it('Create new App', function(){
      cy.get('.drop-down__toggle').click();
      cy.get('#ember39').click();
      cy.xpath('//div[contains(text(),"App name")]').should('include.text', 'App Name');
      cy.xpath ('//input[@placeholder="app-name"]').type(this.data.newApp);
      cy.get('#ember53').click();


    })
})