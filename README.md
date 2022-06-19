# E2ELambdatest
E2E automation testing for lambdatest
Test environment uses Cypress cucumberTS. 

## Get started

### Required software
 - Node 14.14 version or latest
 - Typescript

### Installation
1. Clone the repository
2. Use VScode and open the cloned folder
3. Open terminal and enter this command 
```sh
npm install
```
4 .After installation, you can now run the test
Browser base: 
```sh
npx cypress open
```
Headless : npx cypress run
```sh
npx cypress run
```

### Directories
	Scenario: Login via email and password fields
	Scenario: User Login via valid email and password
	Scenario: User Login via valid email and password with checked Remember Me
	Scenario: User Login skipping email input field leaves Login button as disabled
	Scenario: User Login with empty email receives warning message
	Scenario: User Login with invalid email receives warning message
	Scenario: User Login skipping password input field leaves Login button as disabled
	Scenario: User Login with empty password receives warning message
	Scenario: User Login with invalid password receives warning message
	Scenario: Forgot password link
	Scenario: Sign up link
	Scenario: User Log in with Google button
	Scenario: User Log in with Github button

### Output Image
Browser base: 
![](/cypress/support/images/browserbase_output.bmp)

Headless:
![](/cypress/support/images/headless_output.bmp)


