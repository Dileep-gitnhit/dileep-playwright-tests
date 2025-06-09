class Login {


constructor(page)
{

    this.page = page
    this.username = page.locator('#user-name')
    this.password = page.locator("#password")
    this.signIn = page.getByRole('Button', {name: "Login"})

}


async goTo()
{
    
    console.log("Navigating to SauceDemo login page...");
    await this.page.goto('https://www.saucedemo.com/', { waitUntil: 'load', timeout: 15000 });
    
}

async logIn(userName, passWord)
{


    // await expect(this.username).toBeVisible();
    await this.username.waitFor({ state: 'visible', timeout: 5000 })
    await this.username.fill(userName)
    await this.password.fill(passWord)
    await this.signIn.click()
    console.log("logIn is successfull")


}



}

module.exports = {Login}