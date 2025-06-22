Feature: Login to Ecommerce website and place order


    Scenario: End to End testing
        Given Login to website using "sample@abc.com" and "Sample" 
        When Find the required item "Samsung galaxy s7" and add to cart and vaigate to cart
        Then Enter shipping details and place order
