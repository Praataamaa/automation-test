Feature: Checkout Feature
  # Scenario: User should be able to do Checkout from Home Screen
  #   Given User Open Home Page screen
  #   When User Checkout the Product from Home screen
  #   Then User Successfully Checkout the Product

  # Scenario: User should be able to do Checkout from Product Detail Screen
  #   Given User Open Home Page screen
  #   When User Checkout the Product from Product Detail screen
  #   Then User Successfully Checkout the Product

  # Scenario: User should be able to do Checkout more than 1 Products
  #   Given User Open Home Page screen
  #   When User Checkout More Than 1 Products
  #   Then User Successfully Checkout the Product

  # Scenario: User should be able to do Remove Product from Cart and Continue Shopping
  #   Given User Open Home Page screen
  #   When User Remove Product from Cart and Continue Shopping
  #   Then User Continue Shopping

  # Scenario: User check error at UserName and Password field
  #   Given User Open Home Page
  #   When User not input Username field
  #   Then User will see error message "Epic sadface: Username is required"

  # Scenario: User check error at UserName and Password field
  #   Given User Open Home Page
  #   When User not input Password field
  #   Then User will see error message "Epic sadface: Password is required"
  Scenario: User check error when input with invalid account
    Given User Open Home Page
    When User input with invalid account
    Then User will see error message "Epic sadface: Username and password do not match any user in this servicea"