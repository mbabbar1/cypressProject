Feature: Apply Leave Functionality

  Scenario: Apply for leave with valid details
    Given I am on the apply leave page
    When I enter valid leave details
    And I click on the submit button
    Then I should see a confirmation message indicating successful leave application

  Scenario: Apply for leave with missing required fields
    Given I am on the apply leave page  
    When I enter incomplete leave details
    And I click on the submit button
    Then I should see an error message indicating that required fields are missing

  Scenario: Apply for leave with invalid date range
    Given I am on the apply leave page  
    When I enter a start date that is after the end date
    And I click on the submit button
    Then I should see an error message indicating invalid date range

  Scenario: Apply for leave with overlapping dates
    Given I am on the apply leave page  
    When I enter leave details that overlap with existing approved leave
    And I click on the submit button
    Then I should see an error message indicating overlapping leave dates