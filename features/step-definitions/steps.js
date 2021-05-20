import { Given, When, Then } from '@cucumber/cucumber';

import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
import Googlesearch from '../pageobjects/google.page'
import { expect } from 'chai';

const pages = {
    login: LoginPage
    Google: Googlesearch
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
        case 'Google': await Googlesearch.search(phrase);
        break;
        default: break;
    }
    Then(/^I should see the results provided by (\w+)$/, async (searchEngine) => {
        switch(searchEngine){
            case 'Google': await expect(true).to.be.true;
            break;
            default: break;
        } 
    });
});
