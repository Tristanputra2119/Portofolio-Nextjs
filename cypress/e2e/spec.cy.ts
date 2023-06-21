describe("test website", () => {
  it("sukses!", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Home").click()
  });
});
export {};
