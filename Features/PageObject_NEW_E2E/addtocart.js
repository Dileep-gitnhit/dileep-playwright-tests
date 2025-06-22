const {test,expect} = require('@playwright/test')


class AddToCart{

    constructor(page)
    {

        this.page = page
        this.itemsnamelocator = page.locator("//div[@class='card-block']//a")

    }

    async findAllItems()
    {
        this.count = await this.itemsnamelocator.count()
        console.log("total number of items present: ", +this.count)
    }

    async addToCart(sku)
    {
        const itemname = await this.itemsnamelocator.allTextContents()
        console.log(itemname)
        for(let i=0; i<this.count; i++){

    if(await this.itemsnamelocator.nth(i).textContent() === sku)
    {

        await this.itemsnamelocator.nth(i).click()
        break;

    }

}
    await this.page.waitForLoadState('domcontentloaded')
    }




}


module.exports = {AddToCart}