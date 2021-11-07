describe('TODOS page', () => {
  it('should add a new TODO', () => {
    cy.visit('todo')
      .get('input')
      .type('new TODO')
      .get('button[type=submit]')
      .click()
      .get('.list-group > .list-group-item:first > p')
      .first()
      .should('contain', '1. new TODO');
  });

  it('should toogle a previous TODO', () => {
    cy.visit('/todo')
      .get('input')
      .type('new TODO')
      .get('button[type=submit]')
      .click()
      .get('.list-group > .list-group-item:first > p')
      .first()
      .click()
      .should('have.class', 'complete');
  });

  it('should delete the new TODO', () => {
    cy.visit('todo')
      .get('input')
      .type('new TODO')
      .get('button[type=submit]')
      .click()
      .get(".btn-danger")
      .click()
      //.get('')
      .get('.list-group > .list-group-item > p')
      .should('have.length', 0)
  });
});
