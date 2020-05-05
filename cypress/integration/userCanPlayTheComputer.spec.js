describe("User can play RPS vs the Computer", () => {
    it("computer throws at random and someone wins", () => {
        cy.visit("/");
        cy.get('button#rock').click();
        cy.get('div#result').should('contain', 'Player chose Rock')
        cy.contains("div#result", /Computer chose (Rock|Paper|Scissors)/).should('exist')
        cy.contains("div#result", /(You (won|lost))|(It's a draw)/).should('exist')
    })

    it("shows statistics", () => {
        cy.visit("/")
        cy.get('button#rock').click();
        cy.contains('div#result', /Win: \d*, Draw: \d*, Loss: \d*/).should('exist')
    })

    it("has a hard mode", () => {
        cy.visit('/')
        cy.get('[type="radio"]').first().check()
        cy.get('[type="radio"]').last().check()
    })

    it("using the controller", () => {
        cy.visit('/')
        cy.get('svg#controller').within(() => {
            cy.get('path#rock').click();
        })
        cy.get('div#result').should('contain', 'Player chose Rock')
    })
})