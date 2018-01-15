package pages;



import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import java.util.List;


public class PageElements {


    public PageElements(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.careersDropdown = careersDropdown;
    }



    @FindBy(xpath = "//*[@id='main-navbar']//a[contains(text(), 'Careers')]")
    public WebElement careersDropdown;

    public PageElements(WebElement careersDropdown) {
        this.careersDropdown = careersDropdown;
    }

    @FindBy (id="list3" )
    public WebElement locationsDropdown;

    @FindBy (id="jobsearchclick")
    public WebElement btnSearch;

    @FindBy (xpath = "//input[@placeholder='Keyword or city']")
    public WebElement cityInput;

    @FindBy (id="searchboxfilter")
    public WebElement keyWordInput;

    @FindBy (xpath = "//tbody")
    public WebElement positionListTable;

    @FindBy (className = "descr-container")
    public WebElement descriptionCantainer;

    public void enterValue(WebElement element, String string){
        element.clear();
        element.sendKeys(string);
    }

    public void clickElement(WebElement element){
        element.click();
    }


    public void navigateToThePositionDescription(WebElement element, String positionName){
            List<WebElement> positions = element.findElements(By.xpath("//td[@class='job-title']/a[contains(text(), '"+positionName+"')]"));
            for (WebElement position : positions){
                String positionFullName = position.getText();
                if (positionFullName.contains(positionName)){
                    position.click();
                    break;
                }
            }

    }







}
