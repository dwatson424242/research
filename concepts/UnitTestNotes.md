# Test Driven Development Notes

Function Testing
1) When writing a funciton, have a test to ensure that it is there and exists.
2) Test on various types passed to the function and give expected behavior

Business Rule Testing
1) Determine a business rule. 
2) Setup a test that builds out the rule (i.e. setup accounts, user names, etc.)
3) Run a set of transactions (expected behavior)
4) Determine the results and compare to the expeceted ends.

Example:

	Description: Checking accounts have an overdraft limit of $500. As long as there are sufficient funds (e.g. -$500 or greater) within a checking account after a withdrawal has been made the withdrawal will be allowed.

	Setup:
	Create account 12345 with an initial balance of $50
	Create account 67890 with an initial balance of $0

	Instructions:
	Withdraw $200 from account #12345
	Withdraw $350 from account #67890
	Deposit $100 into account #12345
	Withdraw $200 from account #67890
	...

	Expected Results:
	...


User Interface Testing:

	Example:
	Description: The customer search screen allows user to perform standard wildcard searches on first and last name.

	Setup:
	Remove all customer records from the database.
	Add the following customers: John Smith, James Doe, Robin Saunders, Jim Saunders, Sally Smith, Scott Davidson, Beverley Williams, Bob Roberts, Rob Williams, Robert Smithers, Bobby Snookerby, Sandy Davington, Janice Sinters

	Instructions:
	Display the Customer search screen.
	In the First Name entry field, enter "%ob*"
	In the Last Name entry field, enter "S*"
	Press the search button.

	Expected Results:
	The following names should be displayed in the search result box:
	Robin Saunders
	Robert Smithers
	Bobby Snookerby


