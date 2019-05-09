const baseUrl = 'http://localhost:3000/';

describe('Numbers list page', () => {
  it('loads all number with no initial search query', () => {
    cy.visit(baseUrl);
    cy.get('.number-row').should('have.length', 9999);
    cy.get('.search-box').should('have.value', '');
  });

  it('loads filtered numbers with initial search query', () => {
    cy.visit(`${baseUrl}?q=9991`);
    cy.get('.number-row').should('have.length', 1);
    cy.get('.search-box').should('have.value', '9991');
  });

  it('filters on typing', () => {
    cy.visit(`${baseUrl}?q=999`);
    cy.get('.search-box')
      .type('1')
      .should('have.value', '9991');
    cy.get('.number-row').should('have.length', 1);
  });

  it('removes filters when search cleared', () => {
    cy.visit(`${baseUrl}?q=999`);
    cy.get('.search-box')
      .clear()
      .should('have.value', '');
    cy.get('.number-row').should('have.length', 9999);
  });
});
