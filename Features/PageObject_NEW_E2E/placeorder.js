const {test,expect} = require('@playwright/test')


class PlaceOrder
{

    constructor(page)
    {

        this.page = page
        this.addtocartlocator = page.getByText('Add to cart')
        this.gotocartlocator = page.locator("#cartur")
        this.namelocator = page.locator('#name')
        this.countrylocator = page.locator('#country')
        this.citylocator = page.locator('#city')
        this.cardlocator = page.locator('#card')
        this.monthlocator = page.locator('#month')
        this.yearlocator = page.locator('#year')

    }

    async placeOrder(username)
    {


//expect(this.page.getByText(username)).toBeVisible()
await this.page.waitForLoadState('domcontentloaded')

const gotocartlocator = this.page.locator("#cartur")
await this.page.waitForLoadState('domcontentloaded')

await this.addtocartlocator.click()

await this.page.on('dialog', async (dialog) =>
{

    expect(dialog.type()).toContain('alert')
    console.log(dialog.message())
    await dialog.accept()

})

await this.gotocartlocator.click()

const itemprice = await this.page.locator('#tbodyid tr td').nth(2).textContent()
console.log("Item price - ", +itemprice);
await this.page.waitForLoadState('domcontentloaded')
await this.page.getByRole('button', ({name: "Place Order"})).click();

//enter shipping details

await this.namelocator.fill("Test")
await this.countrylocator.fill("India")
await this.citylocator.fill("Kerala")
await this.cardlocator.fill("1234567890987654")
await this.monthlocator.fill("01")
await this.yearlocator.fill("2030")

await this.page.getByRole('button', ({name: "Purchase"})).click()

expect(this.page.getByText("Thank you for your purchase!")).toBeVisible()
const orderdetails = await this.page.locator(".text-muted").allInnerTexts()
console.log(orderdetails)



    }


}

module.exports = {PlaceOrder}