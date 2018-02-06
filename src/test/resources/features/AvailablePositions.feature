Feature: List of available positions


  Scenario Outline: Looking for positions in Poland
    Given User is on the "https://www.avanade.com/en" page
    And User navigates to Career block
    When User looking for " " available positions in "Poland"
    Then User see more than <num_of_positions> positions available in "<city>"
    Examples: Positions combination
    |num_of_positions|city|
    |3               |Krakow|
    |1               |Warsaw|


  Scenario: Check qualification in a job offer
    Given User is on the "https://www.avanade.com/en" page
    And User navigates to Career block
    And User looking for "Entry Level Software Engineer" available positions in "All Locations"
    When User navigates to a job description for "Entry Level Software Engineer, Seattle"
    Then User see qualification "Strong time management skills" in the job description

