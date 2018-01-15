package stepdefinitions;

import conf.Driver;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.chrome.ChromeDriver;


public class Preps extends Driver {

    private Driver driver;

    public Preps(Driver driver) {
        this.driver = driver;
    }

    @Before
    public void beforeScenario(){
        System.setProperty("webdriver.chrome.driver","src\\drivers\\chromedriver.exe");
        driver.driver =  new ChromeDriver();
        driver.driver.manage().window().maximize();
    }
    @After
    public void afterScenatio(){
        driver.driver.quit();
    }
}
