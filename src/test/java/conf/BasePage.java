package conf;


import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;
import pages.PageElements;

import java.util.concurrent.TimeUnit;


public class BasePage {
  protected WebDriver driver;

  public BasePage(WebDriver driver){
    this.driver = driver;
  }

  public BasePage waitForElement(By locator){
    Wait fluentWait = new FluentWait(driver).withTimeout(10, TimeUnit.SECONDS)
            .pollingEvery(2, TimeUnit.SECONDS).ignoring(NoSuchElementException.class);
    fluentWait.until(ExpectedConditions.visibilityOfElementLocated(locator));
    return this;
  }
  public PageElements navigateTo(String url){
    driver.get(url);
    return new PageElements(driver);
  }
}
