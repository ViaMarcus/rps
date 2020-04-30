describe("User can play RPS vs the Computer", () => {
    it("computer throws at random and someone wins", () => {
        cy.visit("/");
        cy.get('button#rock').click();
        cy.get('div#result').should('contain', 'Player chose Rock')
        cy.get("div#result").contains(/Computer chose (Rock|Paper|Scissors)/).should('exist')
        cy.get("div#result").contains(/(You (won|lost))|(It's a draw)/).should('exist')
    })

    it("shows statistics", () => {
        cy.visit("/")
        cy.get('button#rock').click();
        cy.contains('div#result', /Win: \d*, Draw: \d*, Loss: \d*/).should('exist')
    })

    it("has a hard mode", () => {
        cy.visit('/')
        cy.within('div#selector', () => {
            cy.get('[type="radio"]').first.check()
            cy.should('contain', "Easy Mode")
            cy.get('[type="radio"]').last.check()
            cy.should('contain', "Hard Mode")
        })
    })
})