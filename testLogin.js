const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

// Add a sleep function to pause for a specified time
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function loginTest() {
  // launch the browser
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    // navigate to the login page
    await driver.get("https://test-login-app.vercel.app/");
    
    // Select input elements and fill them out
    await driver.findElement(By.id("email")).sendKeys("test3@gmail.com");
    await driver.findElement(By.id("password")).sendKeys("Password@12345");
    
    // Select login button and invoke click action
    await driver.findElement(By.name("login")).click();
    
    // Wait for the page to load for a few seconds
    await sleep(5000);  // This will make the browser wait for 5 seconds before closing

    // On successful login, get page title
    const pageTitle = await driver.getTitle();
    
    // Check page title using node assertion
    assert.strictEqual(pageTitle, "Welcomepage");
    
    // Check if redirect to welcome page was successful
    await driver.wait(until.titleIs("Welcomepage"), 4000);
  } finally {
    // Quit the driver (close the browser) after the delay
    await driver.quit();
  }
}

loginTest();