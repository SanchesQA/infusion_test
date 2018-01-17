package pages;



import gherkin.lexer.Pa;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;

import java.util.List;
import java.util.concurrent.TimeUnit;


public class PageElements  extends conf.BasePage{

    public PageElements(WebDriver driver) {
       super(driver);
    }



    public PageElements checkDescriprion(String qualification){
        waitForElement(By.className("descr-container"));
        return new PageElements(driver);

    }

    public int countNumberOfResults(String keyWord){
        int count = driver.findElements(By.xpath("//tr[contains(@class, 'job-listing')]/td[contains(text(), '" + keyWord + "')]")).size();
        return count;
    }

    public PageElements enterKeyWordForCareersTable(String keyWord){
        waitForElement(By.xpath("//input[@placeholder='Keyword or city']"));
        WebElement cityInput = driver.findElement(By.xpath("//input[@placeholder='Keyword or city']"));
        cityInput.sendKeys(keyWord);
        return new PageElements(driver);
    }


    public  PageElements clickSearchCareerBtn(){
        WebElement btnSearch = driver.findElement(By.id("jobsearchclick"));
        btnSearch.click();
        return new PageElements(driver);
    }


    public PageElements clickCareerDropDown(){
        WebElement careersDropdown = driver.findElement(By.xpath("//*[@id='main-navbar']//a[contains(text(), 'Careers')]"));
        careersDropdown.click();
        return new PageElements(driver);
    }

    public PageElements chooseLocation(String countryName){
        WebElement locationsDropdown = driver.findElement(By.id("list3" ));
        locationsDropdown.click();
        Actions actions = new Actions(driver);
        WebElement item =  driver.findElement(By.xpath("//div[@id='list3']//a[contains(text(), '"+countryName+"')]"));
        actions.moveToElement(item).perform(); // chrome can't just click it, element is always overlapped
        item.click();
        return new PageElements(driver);
    }

    public PageElements enterPosition(String positionName){
        WebElement keyWordInput=driver.findElement(By.id("searchboxfilter"));
        keyWordInput.sendKeys(positionName);
        return new PageElements(driver);
    }


    public void navigateToThePositionDescription(String positionName){
            waitForElement(By.xpath("//tbody"));
            WebElement positionListTable = driver.findElement(By.xpath("//tbody"));
            List<WebElement> positions = positionListTable.findElements(By.xpath("//td[@class='job-title']/a[contains(text(), '"+positionName+"')]"));
            for (WebElement position : positions){
                String positionFullName = position.getText();
                if (positionFullName.contains(positionName)){
                    position.click();
                    break;
                }
            }

    }







}
