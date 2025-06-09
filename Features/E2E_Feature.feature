Feature: Ecommere End to End

@EndToEnd
    Scenario: Placing order in website
        Given login to ecommerce application using "standard_user" and "secret_sauce"
        When adding "Sauce Labs Onesie" to cart
        Then navigate to cart and verify "Sauce Labs Onesie" is displayed in cart
        Then place order using shipping details "Tester", "QA" and "12345" and verify order successfully placed
