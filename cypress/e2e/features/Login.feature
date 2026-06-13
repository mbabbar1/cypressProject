
Feature: Login Functionality

  Scenario: Login with correct credentials
    Given I am on the login page
    When I enter valid username and password
    And I click on the login button
    Then I should be logged in successfully

    Scenario: Login with Invalid username and valid password
    Given I am on the login page  
    When I enter invalid username and valid password
    And I click on the login button
    Then I should see an error message indicating invalid credentials

    Scenario: Login with Valid username and invalid password
    Given I am on the login page  
    When I enter valid username and invalid password
    And I click on the login button
    Then I should see an error message indicating invalid credentials

    Scenario: Login with Invalid username and invalid password
    Given I am on the login page  
    When I enter invalid username and invalid password
    And I click on the login button
    Then I should see an error message indicating invalid credentials