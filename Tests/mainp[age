import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class MainPageTest {

    public static void main(String[] args) {
        // Set the path to the ChromeDriver executable
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver");

        // URL of the main page
        String mainPageUrl = "https://your-main-page.com";

        // Initialize the WebDriver (ChromeDriver in this example)
        WebDriver driver = new ChromeDriver();

        // Open the main page
        driver.get(mainPageUrl);

        // Verify the presence of elements on the page
        verifyTopRightOptions(driver);
        verifyTopLeftOptions(driver);
        verifyMainPageContent(driver);

        // Close the browser
        driver.quit();
    }

    private static void verifyTopRightOptions(WebDriver driver) {
        // Assuming options are represented by anchor tags with specific IDs
        WebElement option1 = driver.findElement(By.id("option1"));
        WebElement option2 = driver.findElement(By.id("option2"));
        WebElement option3 = driver.findElement(By.id("option3"));

        // Assert the presence of the options
        assertElementPresent(option1, "Option 1");
        assertElementPresent(option2, "Option 2");
        assertElementPresent(option3, "Option 3");
    }

    private static void verifyTopLeftOptions(WebDriver driver) {
        // Assuming grade and logout are represented by anchor tags with specific IDs
        WebElement gradeOption = driver.findElement(By.id("gradeOption"));
        WebElement logoutOption = driver.findElement(By.id("logoutOption"));

        // Assert the presence of the options
        assertElementPresent(gradeOption, "Grade Option");
        assertElementPresent(logoutOption, "Logout Option");
    }

    private static void verifyMainPageContent(WebDriver driver) {
        // Assuming the subject is represented by a specific element
        WebElement subjectElement = driver.findElement(By.id("subjectElement"));

        // Assert the presence of the subject on the main page
        assertElementPresent(subjectElement, "Subject Element");
    }

    private static void assertElementPresent(WebElement element, String elementName) {
        if (element.isDisplayed()) {
            System.out.println(elementName + " is present on the page.");
        } else {
            System.out.println(elementName + " is not present on the page.");
        }
    }
}
