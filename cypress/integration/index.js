const baseUrl = 'http://localhost:3000/';

describe('Numbers list page', () => {
  it('renders all numbers on page load', () => {
    cy.visit(baseUrl);
    cy.get('.number-row').should('have.length', 9999);
  });
});
