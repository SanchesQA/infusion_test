$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AvailablePositions.feature");
formatter.feature({
  "line": 1,
  "name": "List of available positions",
  "description": "",
  "id": "list-of-available-positions",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Looking for positions in Poland",
  "description": "",
  "id": "list-of-available-positions;looking-for-positions-in-poland",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
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
  "name": "User see more than \u003cnum_of_positions\u003e positions available in \"\u003ccity\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "Positions combination",
  "description": "",
  "id": "list-of-available-positions;looking-for-positions-in-poland;positions-combination",
  "rows": [
    {
      "cells": [
        "num_of_positions",
        "city"
      ],
      "line": 10,
      "id": "list-of-available-positions;looking-for-positions-in-poland;positions-combination;1"
    },
    {
      "cells": [
        "3",
        "Krakow"
      ],
      "line": 11,
      "id": "list-of-available-positions;looking-for-positions-in-poland;positions-combination;2"
    },
    {
      "cells": [
        "1",
        "Warsaw"
      ],
      "line": 12,
      "id": "list-of-available-positions;looking-for-positions-in-poland;positions-combination;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3143650802,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Looking for positions in Poland",
  "description": "",
  "id": "list-of-available-positions;looking-for-positions-in-poland;positions-combination;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "User see more than 3 positions available in \"Krakow\"",
  "matchedColumns": [
    0,
    1
  ],
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
  "duration": 10925574583,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_navigates_to_Career_block()"
});
formatter.result({
  "duration": 2815866686,
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
  "duration": 441857047,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 19
    },
    {
      "val": "Krakow",
      "offset": 45
    }
  ],
  "location": "StepDefinitions.userSeeMoreThanNum_of_positionsPositionsAvailableInCity(int,String)"
});
formatter.result({
  "duration": 4013064311,
  "status": "passed"
});
formatter.after({
  "duration": 813838787,
  "status": "passed"
});
formatter.before({
  "duration": 3018803019,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Looking for positions in Poland",
  "description": "",
  "id": "list-of-available-positions;looking-for-positions-in-poland;positions-combination;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "User see more than 1 positions available in \"Warsaw\"",
  "matchedColumns": [
    0,
    1
  ],
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
  "duration": 6778282830,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_navigates_to_Career_block()"
});
formatter.result({
  "duration": 2803545663,
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
  "duration": 423730436,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 19
    },
    {
      "val": "Warsaw",
      "offset": 45
    }
  ],
  "location": "StepDefinitions.userSeeMoreThanNum_of_positionsPositionsAvailableInCity(int,String)"
});
formatter.result({
  "duration": 4506470077,
  "error_message": "java.lang.AssertionError: Number of positions is less than expected. Expected more than: 1 but actual is 0\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat stepdefinitions.StepDefinitions.userSeeMoreThanNum_of_positionsPositionsAvailableInCity(StepDefinitions.java:68)\r\n\tat ✽.Then User see more than 1 positions available in \"Warsaw\"(AvailablePositions.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 823819696,
  "status": "passed"
});
});