const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function runTravelio() {
    let options = new chrome.Options();

    // Config Chrome
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    try {
        // Buka Web Travelio
        await driver.get('https://www.travelio.com/tap');

        // Klik tombol login
        let loginButton = await driver.findElement(By.xpath("//div[@id='loginBtn']"));
        await loginButton.click();
        await driver.sleep(5000)

        // Isi input text email
        let emailField = await driver.wait(until.elementLocated(By.xpath("//input[@id='login-email']")), 10000);
        await driver.wait(until.elementIsVisible(emailField), 10000);
        await emailField.sendKeys('julibima45@gmail.com');

        // Isi input text password
        let passwordField = await driver.wait(until.elementLocated(By.xpath("//input[@id='login-password']")), 10000);
        await driver.wait(until.elementIsVisible(passwordField), 10000);
        await passwordField.sendKeys('test123');
        await driver.sleep(5000)

        // Klik tombol masuk
        let submitButton = await driver.findElement(By.xpath("//button[@id='login-modal-btn']"));
        await submitButton.click();
        
    } finally {
        // Tutup 
        await driver.quit();
    }
}

runTravelio();