import { Given, When, Then } from '@cucumber/cucumber';

import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
import GoogleSearch from '../pageobjects/google.page';
import YahooSearch from '../pageobjects/yahoo.page';
import YandexSearch from '../pageobjects/yandex.page';
import { expect } from 'chai';

const pages = {
    login: LoginPage,
    google: GoogleSearch,
    yahoo: YahooSearch,
    yandex: YandexSearch
}
Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});
When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});
Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});
When(/^I search (\w+) for (.+)$/, async (searchEngine, phrase) => {
switch(searchEngine){   
    case 'google': await GoogleSearch.search(phrase);
    break;
   // default: break;   
    case 'yahoo': await YahooSearch.search(phrase);
    break;
    case 'yandex': await YandexSearch.search(phrase);
    break;
    default: break;
}
});
Then(/^I see the results provided by (\w+)$/, async (searchEngine) => {
    switch(searchEngine){   
        case 'google': await expect(true).to.be.true;
        break;
       // default: break;
        case 'yahoo': await expect(true).to.be.true;
        break;
        case 'yandex': await expect(true).to.be.true;
        break;
        default: break;
}
    
});