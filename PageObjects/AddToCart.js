const {expect} = require('@playwright/test')

class AddToCart
{


constructor(page){

    this.page = page
    this.dropdown = page.locator('//select')
    this.items = page.locator('.inventory_item_description')
    this.itemName = page.locator('.inventory_item')
}


async addToCart(prodname){
    this.dropdown.selectOption('za') //sort items by z-a from dropdown.
    let counts = await this.items.count()

    //console.log(counts)

    for(let i=0; i<counts; i++){

        if(await this.itemName.nth(i).locator('a').last().textContent() == prodname){

            await this.itemName.nth(i).getByRole('button', {name: "Add to cart"}).click()
            break;

        }
    }
    
    
}


}

module.exports = {AddToCart}