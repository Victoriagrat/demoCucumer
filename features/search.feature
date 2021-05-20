Feature: Validate search funnctionality on different platforms. 

Check google.com, yahoo.com, yandex.ru

  Scenario: Verify Google.com search

    Given I am on the Google search page
    When I search Google for IT start
    Then I should see the results provided by Google

    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | foobar   | barfoo               | Your username is invalid!      |
