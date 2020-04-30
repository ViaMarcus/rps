describe("User can play RPS vs the Computer", () => {
    it("computer throws at random", () => {
        cy.visit("/");
        cy.get('button#rock').click();
        cy.get('div#result').should('contain', 'Player chose Rock')
        cy.get("div#result").contains(/Computer chose (Rock|Paper|Scissors)/).should('exist')
        cy.get("div#result").contains(/(You (won|lost))|(It's a draw)/).should('exist')
    })
})