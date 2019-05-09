const baseUrl = 'http://localhost:3000/';

describe('Numbers list page', () => {
  it('with no initial search query', () => {
    cy.visit(baseUrl);
    cy.get('.number-row').should('have.length', 9999);
  });

  it('with initial search query', () => {
    cy.visit(`${baseUrl}?q=9999`);
    cy.get('.number-row').should('have.length', 1);
  });
});
