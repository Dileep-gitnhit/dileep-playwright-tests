const {Given,When,Then} = require('@cucumber/cucumber')

const {expect, playwright, chromium, devices} = require('@playwright/test')

const {Login} = require('../PageObject_NEW_E2E/login')
const {AddToCart} = require('../PageObject_NEW_E2E/addtocart')
const {PlaceOrder} = require('../PageObject_NEW_E2E/placeorder')


Given('Login to website using {string} and {string}',  { timeout: 20000 }, async function (userName, passWord) {
    
        const login = new Login(this.page)
        await login.openWebsite()
        await login.loginToWebsite(userName, passWord)


})


When('Find the required item {string} and add to cart and vaigate to cart', async function(prodname){

        const addcart = new AddToCart(this.page)
        await addcart.findAllItems()
        await addcart.addToCart(prodname)


})

Then('Enter shipping details and place order', async function(){

    const placeorder = new PlaceOrder(this.page)
    await placeorder.placeOrder()

})