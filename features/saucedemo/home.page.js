class HomePage{

    get inputUsername(){
        return $('//*[@id="user-name"]')
    }

    get inputPassword(){
        return $('//*[@id="password"]')
    }

    get btnLogin(){
        return $('//*[@id="login-button"]')
    }

    get txtSwagLabs(){
        return $('//div[@class="app_logo" and text()="Swag Labs"]')
    }

    get txtProducts1(){
        return $('//div[@data-test="inventory-item-name" and text()="Sauce Labs Backpack"]')
    }

    get txtProducts2(){
        return $('//div[@data-test="inventory-item-name" and text()="Sauce Labs Bolt T-Shirt"]')
    }

    get btnAddtocart(){
        return $('//*[@id="add-to-cart"]')
    }
    
    get btnAddtocart1(){
        return $('//*[@id="add-to-cart-sauce-labs-backpack"]')
    }

    get btnAddtocart2(){
        return $('//*[@id="add-to-cart-sauce-labs-bolt-t-shirt"]')
    }

    get txtTotal1cart(){
        return $('//span[@class="shopping_cart_badge" and text()="1"]')
    }

    get txtTotal2cart(){
        return $('//span[@class="shopping_cart_badge" and text()="2"]')
    }

    get txtTotal2cart(){
        return $('//span[@class="shopping_cart_badge" and text()="2"]')
    }

    get btnCart(){
        return $('//*[@id="shopping_cart_container"]')
    }

    get txtErrLogin(){
        return $('//*[@id="login_button_container"]//h3')
    }

    async login(username, password){
        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        await delay(2000);
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await delay(2000);
        await this.btnLogin.click()
    }

    async loginLeaveUsername(password){
        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        await delay(2000);
        await this.inputPassword.setValue(password)
        await delay(2000);
        await this.btnLogin.click()
    }

    async loginLeavePassword(username){
        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        await delay(2000);
        await this.inputUsername.setValue(username)
        await delay(2000);
        await this.btnLogin.click()
    }

    async waitForErrorMessage() {
        await this.txtErrLogin.waitForDisplayed()
    }

    async usernameRequired(){
        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        await delay(2000);
        await this.waitForErrorMessage();
        return await this.txtErrLogin.getText();
    }

    async passwordRequired(){
        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        await delay(2000);
        await this.waitForErrorMessage();
        return await this.txtErrLogin.getText();
    }

    async invalidAccount(password){
        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        await delay(2000);
        await this.inputPassword.setValue(password)
        await delay(2000);
        await this.btnLogin.click()
        await this.txtErrUsername.getText()
        await delay(2000);
    }


    async Select1Cart(){
        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        await delay(2000);
        await this.txtProducts1.isDisplayed()
        await this.btnAddtocart1.click()
        await this.txtTotal1cart.isDisplayed()
        await this.btnCart.click()
        await delay(2000);
    }

    async Select2Cart(){
        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        await delay(2000);
        await this.txtProducts1.isDisplayed()
        await this.txtProducts2.isDisplayed()
        await this.btnAddtocart1.click()
        await this.btnAddtocart2.click()
        await this.txtTotal2cart.isDisplayed()
        await this.btnCart.click()
        await delay(2000);
    }

    async SelectCart(){
        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        await delay(2000);
        await this.txtProducts1.isDisplayed()
        await this.txtProducts1.click()
        await delay(2000);
        await this.btnAddtocart.click()
        await this.txtTotal1cart.isDisplayed()
        await this.btnCart.click()
        await delay(2000);
    }

}

export default new HomePage()