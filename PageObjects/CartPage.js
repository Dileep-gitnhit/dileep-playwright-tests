const { expect } = require("@playwright/test");
const { AddToCart } = require("./AddToCart");

class CartPage
{



constructor(page)
{

    this.page = page;
    this.openCart = page.locator('.shopping_cart_link')


}

async goToCart(prodName)
{

    await this.openCart.click()
    await this.page.screenshot({path: 'cartpagescreenshot.png'})
    
//verify prodname is correct
    const itemname = await this.page.locator('.cart_item').locator('a').textContent()
    expect(itemname).toBe(prodName)
    console.log(itemname)
}


}

module.exports = {CartPage}