describe("commands test", () => {
    it("Check Command", () => {
        cy.visit("https://www.w3.org/TR/wai-aria-practices-1.1/examples/checkbox/checkbox-2/checkbox-2.html")
        //cy.get("#menu-login-signup-menu-1 > li.login-url.menu-item.menu-item-type-custom.menu-item-object-custom.menu-item-7501 > a").should('be.visible').click()
        //cy.get(".tp-checkbox").check()
        cy.get(".chkbox").check()
    })
})