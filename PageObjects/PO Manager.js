const {Login} = require('./Login')

const {AddToCart} = require('./AddToCart')
const {CartPage} = require('./CartPage')
const {Checkout} = require('./CheckOut')

class POManager

{

    constructor(page)
    {

        
        this.page = page
        this.login = new Login(this.page)
        this.addtocart = new AddToCart(this.page)
        this.cartpage = new CartPage(this.page)
        this.checkout = new Checkout(this.page)
    }

getLoginPage()
{
    return this.login
}

getAddToCart()
{
    return this.addtocart
}

getCartPage()
{
    return this.cartpage
}

getCheckOut()
{
    return this.checkout
}

}
module.exports = {POManager}