/// <reference types="cypress" />
import { Then, Given, When } from 'cypress-cucumber-preprocessor/steps';

Cypress.on('uncaught:exception', () => {
  return false;
});

// Scenario: Login via email and password fields
Given(`browser is at Lambdatest login form {string}`, (url:string) =>{
  cy.visit(url);
});

Then(`email input field exist`, ()=>{
  cy.findByPlaceholderText(`Email`).should(`exist`);
});

Then(`password input field exist`, ()=>{
  cy.findByPlaceholderText(`Password`).should(`exist`);
});

Then(`Login button exist`, ()=>{
  cy.findByText(`Login`).should(`exist`);
});

// Scenario: User Login via valid email and password
When(`user enters email {string}`, (email:string)=>{
  cy.findByPlaceholderText(`Email`).should(`exist`)
  .type(email);
});

When(`user enters password {string}`,(password:string)=>{
  cy.findByPlaceholderText(`Password`).should(`exist`)
  .type(password);
});

When(`clicks {string}`, (loginBtn:string)=>{
  cy.findByText(loginBtn).should(`exist`)
  .click();
});

Then(`user is redirected to lamdatest dashboard`,()=>{
  cy.url().should(`contains`, `https://accounts.lambdatest.com/dashboard`);
});

Then(`a text {string} exist`, (message:string)=>{
  cy.findByText(message).should(`exist`);
});

//	Scenario: User Login via valid email and password with checked Remember Me
When(`check {string}`, (rememberMeLink:string)=>{
  cy.findByRole(`checkbox`,{name: rememberMeLink}).should(`exist`).check();
})

//	Scenario: User Login skipping email input field
Then(`{string} button should be disabled`, (loginBtn:string)=>{
  cy.findByText(loginBtn).should(`be.disabled`);
});

//	Scenario: User Login with empty email
When(`user cursor is at email field but enters nothing`, ()=>{
  cy.findByPlaceholderText(`Email`).should(`exist`).focus();
});

When(`move to password text field`, ()=>{
  cy.findByPlaceholderText(`Password`).should(`exist`).focus();
});

Then(`email warning message {string} is shown`,(warningMsg:string)=>{
  cy.findByText(warningMsg).should(`exist`);
});

//	Scenario: User Login with empty password
When(`move to password input field but enters nothing`, ()=>{
  cy.findByPlaceholderText(`Password`).should(`exist`).focus();
});

When(`clicks anywhere outside the password input field`, ()=>{
  cy.findByPlaceholderText(`Email`).should(`exist`).focus();
});

Then(`Password warning message {string} is shown`,(warningMsg:string)=>{
  cy.findByText(warningMsg).should(`exist`);
});

//  Scenario: User Login with invalid password
When(`enters password {string}`, (password:string)=>{
  cy.findByPlaceholderText(`Password`).should(`exist`).type(password);
});

Then(`a warning message {string} is shown`, (warningMsg:string)=>{
  cy.findByText(warningMsg).should(`exist`);
});

//  Scenario: Forgot password link
When(`user clicks {string} link`,(textLink:string)=>{
  cy.findByText(textLink).should(`exist`).click();
});

Then(`user is redirected to Reset Password page`, ()=>{
  cy.url().should(`contains`, `https://accounts.lambdatest.com/password/reset`);
});

Then(`{string} input field and Reset Password button exist`, (fieldName: string)=>{
  cy.findByRole(`button`).should(`exist`);
  cy.findByPlaceholderText(fieldName).should(`exist`);
});

//  Scenario: Sign up link
Then(`user is redirected to Lambdatest register page`, ()=>{
  cy.url().should(`contains`, `https://accounts.lambdatest.com/register`);
});

//  Scenario: User Log in with Google
Then(`{string} button exist`, (btnName:string)=>{
  cy.findByText(btnName).should(`exist`);
});

