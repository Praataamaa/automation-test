class CartPage{

    get txtProducts1(){
        return $('//div[@data-test="inventory-item-name" and text()="Sauce Labs Backpack"]')
    }

    get txtProducts2(){
        return $('//div[@data-test="inventory-item-name" and text()="Sauce Labs Bolt T-Shirt"]')
    }
 
    get btnRemoveProducts1(){
        return $('//*[@id="remove-sauce-labs-backpack"]')
    }

    get btnCheckout(){
        return $('//*[@id="checkout"]')
    }

    get btnContinueShopping(){
        return $('//*[@id="continue-shopping"]')
    }

    async Checkout1(){
        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        await delay(2000);
        await this.txtProducts1.isDisplayed()
        await this.btnCheckout.isDisplayed()
        await this.btnContinueShopping.isDisplayed()
        await this.btnCheckout.click()
        await delay(2000);
    }

    async Checkout2(){
        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        await delay(2000);
        await this.txtProducts1.isDisplayed()
        await this.txtProducts2.isDisplayed()
        await this.btnCheckout.isDisplayed()
        await this.btnContinueShopping.isDisplayed()
        await this.btnCheckout.click()
        await delay(2000);
    }

    async RemoveProduct(){
        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        await delay(2000);
        await this.txtProducts1.isDisplayed()
        await this.txtProducts2.isDisplayed()
        await this.btnCheckout.isDisplayed()
        await this.btnContinueShopping.isDisplayed()
        await this.btnRemoveProducts1.click()
        const isElementPresent = await this.txtProducts1.isExisting();
        expect(isElementPresent).toBe(false);
        await delay(2000)
        await this.btnContinueShopping.click()
        await delay(2000)
    }
  
}

export default new CartPage()