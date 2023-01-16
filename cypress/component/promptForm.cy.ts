import {CoderForm} from "../../src/components/codingHelper";

describe('promptForm.cy.ts', () => {
  it('playground', () => {
    // cy.mount()
  })
})

describe('CoderForm', () => {

  it('should create a prompt', () => {
    // @ts-ignore
    cy.mount(CoderForm())

    cy.get('#taskInputField').type('Write code');
    cy.get('#contextInputField').type('the given problem');
    cy.get('#createPrompt').click();

    cy.get('#promptOut').should('have.value', "Given the given problem do Write code only output code. Don't explain. Add documentation.");
  });
});