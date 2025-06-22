const { test, expect } = require("@playwright/test")

class Checkout
{


    constructor(page)
    {


        this.page = page
        this.checkout = page.getByRole('button',{name: "Checkout"})
        this.firstname = page.locator('#first-name')
        this.lastname = page.locator('#last-name')
        this.postalcode = page.locator('#postal-code')
        //this.totalamount = page.locator('.summary_total_label')

        this.totalamount = page.locator('[data-test="total-label"]')


    }

async clickOnCheckout(firstName,lastName,zip)
{
    await this.checkout.click()
}

async shippingDetails(firstName, lastName, zip)
{
    await this.firstname.fill(firstName)
    await this.lastname.fill(lastName)
    await this.postalcode.fill(zip)
    await this.page.locator('#continue').click()
}

async orderReviewPage()
{
    let orderTotal = [];
    await this.page.screenshot({path: 'reviewscreeensot.png'})
    let total = this.totalamount.allInnerTexts();
    console.log("Order total = ", +total)

    await this.page.locator('.cart_footer').locator('button').last().click()

    let message = await this.page.locator('#checkout_complete_container').textContent()
    expect(message).toContain("Thank you for your order!")

}


}


module.exports = {Checkout}