Feature: Lambdatest Login Form

	Scenario: Login via email and password fields
		Given browser is at Lambdatest login form "http://accounts.lambdatest.com/login/"
		Then email input field exist
		And password input field exist
		And Login button exist

	Scenario: User Login via valid email and password
		Given browser is at Lambdatest login form "http://accounts.lambdatest.com/login/"
		When user enters email "qatest001a@gmail.com"
		And user enters password "P4ssword!"
		And clicks "Login"
		Then user is redirected to lamdatest dashboard
		And a text "Hi there 👋, how would you like to use LambdaTest?" exist
	
	Scenario: User Login via valid email and password with checked Remember Me
		Given browser is at Lambdatest login form "https://accounts.lambdatest.com/login"
		When user enters email "qatest001a@gmail.com"
		And user enters password "P4ssword!"
		And check "Remember Me" 
		And clicks "Login"
		Then user is redirected to lamdatest dashboard
		And a text "Hi there 👋, how would you like to use LambdaTest?" exist
	
	Scenario: User Login skipping email input field leaves Login button as disabled
		Given browser is at Lambdatest login form "https://accounts.lambdatest.com/login"
		When user enters password "P4ssword!"
		Then "Login" button should be disabled
	
	Scenario: User Login with empty email receives warning message
		Given browser is at Lambdatest login form "https://accounts.lambdatest.com/login"
		When user cursor is at email field but enters nothing
		And move to password text field
		Then email warning message "Please enter your email" is shown
		And "Login" button should be disabled
	
	Scenario: User Login with invalid email receives warning message
		Given browser is at Lambdatest login form "https://accounts.lambdatest.com/login"
		When user enters email "randomString"
		And move to password text field
		Then email warning message "Invalid email address" is shown
		And "Login" button should be disabled

	Scenario: User Login skipping password input field leaves Login button as disabled
		Given browser is at Lambdatest login form "https://accounts.lambdatest.com/login"
		When user enters email "qatest001a@gmail.com"
		Then "Login" button should be disabled

	Scenario: User Login with empty password receives warning message
		Given browser is at Lambdatest login form "https://accounts.lambdatest.com/login"
		When user enters email "qatest001a@gmail.com"
		And move to password input field but enters nothing
		And clicks anywhere outside the password input field
		Then Password warning message "Please enter your password" is shown
		Then "Login" button should be disabled

	Scenario: User Login with invalid password receives warning message
		Given browser is at Lambdatest login form "https://accounts.lambdatest.com/login"
		When user enters email "qatest001a@gmail.com"
		And enters password "randomString!"
		And clicks "Login"
		Then a warning message "Please enter a correct username and password. Note that the password is case-sensitive. After 4 unsuccessful attempts your account will be locked." is shown
		And "Login" button should be disabled

	Scenario: Forgot password link
		Given browser is at Lambdatest login form "https://accounts.lambdatest.com/login"
		When user clicks "Forgot Password?" link
		Then user is redirected to Reset Password page
		And "Email" input field and Reset Password button exist

	Scenario: Sign up link
		Given browser is at Lambdatest login form "https://accounts.lambdatest.com/login"
		When user clicks "Sign up" link
		Then user is redirected to Lambdatest register page
	
	Scenario: User Log in with Google button
		Given browser is at Lambdatest login form "https://accounts.lambdatest.com/login"
		Then "Log in with Google" button exist
	
	Scenario: User Log in with Github button
		Given browser is at Lambdatest login form "https://accounts.lambdatest.com/login"
		Then "Log in with Github" button exist
	