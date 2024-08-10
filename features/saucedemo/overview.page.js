class OverviewPage{

    get txtProducts1(){
        return $('//div[@data-test="inventory-item-name" and text()="Sauce Labs Backpack"]')
    }

    get txtProducts2(){
        return $('//div[@data-test="inventory-item-name" and text()="Sauce Labs Bolt T-Shirt"]')
    }

    get txtPaymentInformation(){
        return $('//div[@class="summary_info_label" and text()="Payment Information:"]')
    }

    get txtShippingInformation(){
        return $('//div[@class="summary_info_label" and text()="Shipping Information:"]')
    }

    get txtPriceTotal(){
        return $('//div[@class="summary_info_label" and text()="Price Total"]')
    }

    get btnFinish(){
        return $('//*[@id="finish"]')
    }

    async Overview1(){
        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        await delay(2000);
        await this.txtProducts1.isDisplayed()
        await this.txtPaymentInformation.isDisplayed()
        await this.txtShippingInformation.isDisplayed()
        await this.txtPriceTotal.isDisplayed()
        await this.btnFinish.click()
        await delay(2000);
    }

    async Overview2(){
        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        await delay(2000);
        await this.txtProducts1.isDisplayed()
        await this.txtProducts2.isDisplayed()
        await this.txtPaymentInformation.isDisplayed()
        await this.txtShippingInformation.isDisplayed()
        await this.txtPriceTotal.isDisplayed()
        await this.btnFinish.click()
        await delay(2000);
    }
    
}

export default new OverviewPage()
