Feature: List of available positions

  @Ignore
  Scenario: Looking for positions in Cracow
    Given User is on the "https://www.avanade.com/en" page
    And User navigates to Career block
    When User looking for " " available positions in "Poland"
    Then User see more than 5 positions available in "Krakow"
  @Ignore
  Scenario: Looking for positions in Warsaw
    Given User is on the "https://www.avanade.com/en" page
    And User navigates to Career block
    When User looking for " " available positions in "Poland"
    Then User see more than 0 positions available in "Warsaw"

  Scenario: Check qualification in a job offer
    Given User is on the "https://www.avanade.com/en" page
    And User navigates to Career block
    And User looking for "Entry Level Software Engineer" available positions in "All Locations"
    When User navigates to a job description for "Entry Level Software Engineer, Seattle"
    Then User see qualification "Strong time management skills" in the job description

