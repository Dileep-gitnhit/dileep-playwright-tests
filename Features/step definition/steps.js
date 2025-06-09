const {Given,When,Then} = require('@cucumber/cucumber')
const {expect, playwright, chromium, devices} = require('@playwright/test')
const {POManager} = require('../../PageObjects/PO Manager')


        
        Given('login to ecommerce application using {string} and {string}',  { timeout: 20000 }, async function (userName, passWord) {
           // Write code here that turns the phrase above into concrete actions
        // const browser = await playwright.chromium.launch()
        // const browser = await chromium.launch({headless: false}) //we are calling a browser here, then we are calling page, we cannot directyly mention page here like done in test
        // const context = await browser.newContext() //added this browser starting in hooks...
        // this.page = await context.newPage()
           this.poManager = new POManager(this.page)
           const login = this.poManager.getLoginPage()
           await login.goTo()
           await login.logIn(userName, passWord)
           
         });




         When('adding {string} to cart', async function (prodname) {
           // Write code here that turns the phrase above into concrete actions
           const addtocart = this.poManager.getAddToCart()
           await addtocart.addToCart(prodname)

         });



        Then('navigate to cart and verify {string} is displayed in cart', async function (prodname) {
           // Write code here that turns the phrase above into concrete actions
           
            const cartpage = this.poManager.getCartPage()
            await cartpage.goToCart(prodname)
            

         });


        Then('place order using shipping details {string}, {string} and {string} and verify order successfully placed', async function (firstName, lastName, zip) {
           // Write code here that turns the phrase above into concrete actions
           const checkout = this.poManager.getCheckOut()
           await checkout.clickOnCheckout()
           await checkout.shippingDetails(firstName,lastName,zip)
           await checkout.orderReviewPage()

         });