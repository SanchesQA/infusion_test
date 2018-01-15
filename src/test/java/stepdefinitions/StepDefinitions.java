package stepdefinitions;


import conf.Driver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;
import pages.PageElements;
import java.util.concurrent.TimeUnit;
public class StepDefinitions extends Driver {

    private Driver driver;

    public StepDefinitions(Driver driver) {
        this.driver = driver;
    }

    public WebElement waitForElement(WebElement element){
        Wait fluentWait = new FluentWait(driver.driver).withTimeout(10, TimeUnit.SECONDS)
                .pollingEvery(2, TimeUnit.SECONDS).ignoring(NoSuchElementException.class);
        fluentWait.until(ExpectedConditions.visibilityOf(element));
        return element;
    }


    @Given("^User is on the \"([^\"]*)\" page$")
    public void user_is_on_the_page(String url) throws Throwable {

          driver.driver.get(url);


    }

    @Given("^User navigates to Career block$")
    public void user_navigates_to_Career_block() throws Throwable {
    PageElements page = new PageElements(driver.driver);
    page.clickElement(page.careersDropdown);

    }

    @Given("^User looking for \"([^\"]*)\" available positions in \"([^\"]*)\"$")
    public void user_looking_for_available_positions_in(String positionName, String countryName) throws Throwable {
        PageElements page = new PageElements(driver.driver);
        page.clickElement(page.locationsDropdown);
        Actions actions = new Actions(driver.driver);
        WebElement item =  driver.driver.findElement(By.xpath("//div[@id='list3']//a[contains(text(), '"+countryName+"')]"));
        actions.moveToElement(item).perform();
        item.click();

        page.enterValue(page.keyWordInput, positionName);
        page.clickElement(page.btnSearch);
    }

    @Then("^User see more than (\\d+) positions available in \"([^\"]*)\"$")
    public void user_see_more_than_positions_available_in(int numOfPositions, String city) throws Throwable {
        PageElements page = new PageElements(driver.driver);
        waitForElement(page.cityInput);
        page.enterValue(page.cityInput, city);
        int count = driver.driver.findElements(By.xpath("//tr[contains(@class, 'job-listing')]/td[contains(text(), '" + city + "')]")).size();
        Assert.assertTrue("Number of positions is less than expected. Expected: "+ numOfPositions+ " but actual is "+ count,count>numOfPositions);
    }


    @When("^User navigates to a job description for \"([^\"]*)\"$")
    public void userNavigatesToAJobDescriptionFor(String positionName) throws Throwable {
        PageElements page = new PageElements(driver.driver);
        waitForElement(page.positionListTable);
        page.navigateToThePositionDescription(page.positionListTable, positionName);
    }

    @Then("^User see qualification \"([^\"]*)\" in the job description$")
    public void userSeeQualificationInTheJobDescription(String qualification) throws Throwable {
        PageElements page = new PageElements(driver.driver);
        waitForElement(page.descriptionCantainer);
        Assert.assertTrue(driver.driver.findElement(By.xpath("//*[contains(text(),'"+qualification+"')]")).isDisplayed());

    }
}
