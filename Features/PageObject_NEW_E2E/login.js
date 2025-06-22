const {test,expect} = require('@playwright/test')


class Login
{

    constructor(page)
    {

        this.page = page
        this.loginlocator = page.locator("#login2")
        this.usernamelocator = page.locator('#loginusername')
        this.passwordlocator = page.locator("#loginpassword")

    }

    async openWebsite()
    {
        console.log("Navigating to SauceDemo login page...");
        await this.page.goto('https://demoblaze.com/index.html',  { waitUntil: 'load', timeout: 15000 })
    }

    async loginToWebsite(username,password)
    {

        await this.loginlocator.click()
        await this.usernamelocator.fill(username)
        await this.passwordlocator.fill(password)
        await this.page.getByRole('button', ({name : 'Log in'})).click()
// need to wait till login, since login is taking time, so add assertion, such that uusername is visibl
        await this.page.locator('#nameofuser').waitFor({state: 'visible'})
        expect(this.page.locator('#nameofuser')).toContainText(username)
        await this.page.waitForLoadState('domcontentloaded')

    }


}

module.exports = {Login}