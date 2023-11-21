import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("トップページに訪れる", () => {
    cy.visit("/")
})

Then("ロゴが見える", () => {
    cy.get("h1").should("be.visible");
})
