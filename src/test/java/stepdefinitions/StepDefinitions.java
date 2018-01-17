package stepdefinitions;


import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;

import pages.PageElements;


public class StepDefinitions  {
    WebDriver driver;
    PageElements pageElements;

    @Before
    public void beforeScenario(){
        System.setProperty("webdriver.chrome.driver","src\\drivers\\chromedriver.exe");
       driver =  new ChromeDriver();
       driver.manage().window().maximize();
    }
    @After
    public void afterScenatio(){
        driver.quit();
    }

    @Given("^User is on the \"([^\"]*)\" page$")
    public void user_is_on_the_page(String url) throws Throwable {
        pageElements = new PageElements(driver);
        pageElements.navigateTo(url);
    }

    @Given("^User navigates to Career block$")
    public void user_navigates_to_Career_block() throws Throwable {
        pageElements.clickCareerDropDown();

    }

    @Given("^User looking for \"([^\"]*)\" available positions in \"([^\"]*)\"$")
    public void user_looking_for_available_positions_in(String positionName, String countryName) throws Throwable {
        pageElements.chooseLocation(countryName)
                    .enterPosition(positionName)
                    .clickSearchCareerBtn();
    }

    @Then("^User see more than (\\d+) positions available in \"([^\"]*)\"$")
    public void user_see_more_than_positions_available_in(int numOfPositions, String city) throws Throwable {
        pageElements.enterKeyWordForCareersTable(city)
                    .checkNumberOfResults(numOfPositions,city);
    }


    @When("^User navigates to a job description for \"([^\"]*)\"$")
    public void userNavigatesToAJobDescriptionFor(String positionName) throws Throwable {
       pageElements.navigateToThePositionDescription(positionName);
    }

    @Then("^User see qualification \"([^\"]*)\" in the job description$")
    public void userSeeQualificationInTheJobDescription(String qualification) throws Throwable {
        pageElements.checkDescriprion(qualification);
    }
}
