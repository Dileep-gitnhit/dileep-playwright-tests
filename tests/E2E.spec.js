const {test, expect} = require('@playwright/test')
const {Login} = require('../PageObjects/Login')

const {AddToCart} = require('../PageObjects/AddToCart')
const {CartPage} = require('../PageObjects/CartPage')
const {Checkout} = require('../PageObjects/CheckOut')




test ('@EndToEnd E2E_Dileep ${data.userName}', async ({page}) =>
{

    let prodname = "Sauce Labs Onesie"
    let firstName = "Tester"
    let lastName = "QA"
    let zip = "12345"
    let userName = "standard_user"
    let passWord = "secret_sauce"
    // await page.goto("https://www.saucedemo.com/")
    // await page.pause()
    const login = new Login(page)
    await login.goTo(page)
    await login.logIn(userName, passWord)

    const addtocart = new AddToCart(page)
    await addtocart.addToCart(prodname)

    const cartpage = new CartPage(page)
    await cartpage.goToCart(prodname)

    const checkout = new Checkout(page)
    await checkout.clickOnCheckout()
    await checkout.shippingDetails(firstName,lastName,zip)
    await checkout.orderReviewPage()
    //await page.pause()



})
