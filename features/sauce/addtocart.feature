@ID

Feature: Saucedemo Positive case

  Scenario: Login and Purchase
    * validate url "www.saucedemo.com"
    * SauceLab Login "standard_user" "secret_sauce"
    * Verify that you are logged in to the application
    * Sort the products by the highest price
    * Verify the results to match with your query
    * Select and open by index "1"
    * Verify selected item details
    * Buy the selected product
    * Verify and enter the required details on Checkout page
    * Verify the order status and capture the screen
