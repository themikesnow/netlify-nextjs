describe('Login', () => {
  it('Login/Logout Flow', () => {
    for (let i = 0; i < 3; i++) {
      cy.login();
      cy.logout();
    }
  });
});
