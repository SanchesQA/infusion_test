$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AvailablePositions.feature");
formatter.feature({
  "line": 1,
  "name": "List of available positions",
  "description": "",
  "id": "list-of-available-positions",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4458324766,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Looking for positions in Cracow",
  "description": "",
  "id": "list-of-available-positions;looking-for-positions-in-cracow",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on the \"https://www.avanade.com/en\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User navigates to Career block",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User looking for \" \" available positions in \"Poland\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User see more than 5 positions available in \"Krakow\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.avanade.com/en",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.user_is_on_the_page(String)"
});
formatter.result({
  "duration": 8546087316,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_navigates_to_Career_block()"
});
formatter.result({
  "duration": 531263171,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " ",
      "offset": 18
    },
    {
      "val": "Poland",
      "offset": 45
    }
  ],
  "location": "StepDefinitions.user_looking_for_available_positions_in(String,String)"
});
formatter.result({
  "duration": 4039079667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 19
    },
    {
      "val": "Krakow",
      "offset": 45
    }
  ],
  "location": "StepDefinitions.user_see_more_than_positions_available_in(int,String)"
});
formatter.result({
  "duration": 4595288018,
  "error_message": "java.lang.AssertionError: Number of positions is less than expected. Expected: 5 but actual is 4\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat stepdefinitions.StepDefinitions.user_see_more_than_positions_available_in(StepDefinitions.java:68)\r\n\tat ✽.Then User see more than 5 positions available in \"Krakow\"(AvailablePositions.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 910724047,
  "status": "passed"
});
formatter.before({
  "duration": 7903849000,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Looking for positions in Warsaw",
  "description": "",
  "id": "list-of-available-positions;looking-for-positions-in-warsaw",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "User is on the \"https://www.avanade.com/en\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User navigates to Career block",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User looking for \" \" available positions in \"Poland\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User see more than 0 positions available in \"Warsaw\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.avanade.com/en",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.user_is_on_the_page(String)"
});
formatter.result({
  "duration": 10099315541,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_navigates_to_Career_block()"
});
formatter.result({
  "duration": 520259785,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " ",
      "offset": 18
    },
    {
      "val": "Poland",
      "offset": 45
    }
  ],
  "location": "StepDefinitions.user_looking_for_available_positions_in(String,String)"
});
formatter.result({
  "duration": 3666179305,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 19
    },
    {
      "val": "Warsaw",
      "offset": 45
    }
  ],
  "location": "StepDefinitions.user_see_more_than_positions_available_in(int,String)"
});
formatter.result({
  "duration": 4036044251,
  "status": "passed"
});
formatter.after({
  "duration": 844940790,
  "status": "passed"
});
formatter.before({
  "duration": 3009587984,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Check qualification in a job offer",
  "description": "",
  "id": "list-of-available-positions;check-qualification-in-a-job-offer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "User is on the \"https://www.avanade.com/en\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User navigates to Career block",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User looking for \"Entry Level Software Engineer\" available positions in \"All Locations\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User navigates to a job description for \"Entry Level Software Engineer, Seattle\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User see qualification \"Strong time management skills\" in the job description",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.avanade.com/en",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.user_is_on_the_page(String)"
});
formatter.result({
  "duration": 8347435043,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_navigates_to_Career_block()"
});
formatter.result({
  "duration": 452532378,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Entry Level Software Engineer",
      "offset": 18
    },
    {
      "val": "All Locations",
      "offset": 73
    }
  ],
  "location": "StepDefinitions.user_looking_for_available_positions_in(String,String)"
});
formatter.result({
  "duration": 4124610351,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Entry Level Software Engineer, Seattle",
      "offset": 41
    }
  ],
  "location": "StepDefinitions.userNavigatesToAJobDescriptionFor(String)"
});
formatter.result({
  "duration": 3887313792,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Strong time management skills",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.userSeeQualificationInTheJobDescription(String)"
});
formatter.result({
  "duration": 63014035,
  "status": "passed"
});
formatter.after({
  "duration": 811231373,
  "status": "passed"
});
});