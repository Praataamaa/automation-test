import { Given, When, Then } from '@wdio/cucumber-framework';
import homePage from '../saucedemo/home.page.js';
import cartPage from '../saucedemo/cart.page.js';
import overviewPage from '../saucedemo/overview.page.js';
import your_informationPage from '../saucedemo/your_information.page.js';
import successPage from '../saucedemo/success.page.js';

Given (/^User Open Home Page screen$/, async () => {
    await browser.url('https://www.saucedemo.com/');
    await homePage.login('standard_user', 'secret_sauce');
});

Given (/^User Open Home Page$/, async () => {
    await browser.url('https://www.saucedemo.com/');
});

When (/^User Checkout the Product from Home screen$/, async () => {
    await homePage.Select1Cart();
    await cartPage.Checkout1();
    await your_informationPage.Information('Tama', 'Pratama', 15132);
    await overviewPage.Overview1();
});

When (/^User Checkout the Product from Product Detail screen$/, async () => {
    await homePage.SelectCart();
    await cartPage.Checkout1();
    await your_informationPage.Information('Tama', 'Pratama', 15132);
    await overviewPage.Overview1();
});

When (/^User Checkout More Than 1 Products$/, async () => {
    await homePage.Select2Cart();
    await cartPage.Checkout2();
    await your_informationPage.Information('Tama', 'Pratama', 15132);
    await overviewPage.Overview1();
});

When (/^User Remove Product from Cart and Continue Shopping$/, async () => {
    await homePage.Select2Cart();
    await cartPage.RemoveProduct();
});

When (/^User not input Username field$/, async () => {
    await homePage.loginLeaveUsername('secret_sauce');
});

When (/^User not input Password field$/, async () => {
    await homePage.loginLeavePassword('secret_sauce');
});

When (/^User input with invalid account$/, async () => {
    await homePage.login('asdasd', 'asdasd');
});

Then (/^User Successfully Checkout the Product$/, async () => {
    await successPage.success();
});

Then (/^User Continue Shopping$/, async () => {
    await successPage.continueShopping();
});

Then(/^User will see error message "([^"]*)"$/, async function (expectedErrorMessage) {
    const actualErrorMessage = await homePage.passwordRequired();
    if (actualErrorMessage !== expectedErrorMessage) {
        throw new Error(`Expected error message '${expectedErrorMessage}' but got '${actualErrorMessage}'`);
    }
});
