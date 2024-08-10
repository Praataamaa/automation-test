class SuccessPage{

    get txtComplete(){
        return $('//*[@data-test="complete-header" and text()="Thank you for your order!"]')
    }

    get btnBackHome(){
        return $('//*[@id="back-to-products"]')
    }

    get btnBurger(){
        return $('//*[@id="react-burger-menu-btn"]')
    }

    get btnLogout(){
        return $('//*[@id="logout_sidebar_link"]')
    }

    async success(){
        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        await delay(2000)
        await this.txtComplete.isDisplayed()
        await this.btnBackHome.click()
        await delay(2000)
        await this.btnBurger.click()
        await delay(2000)
        await this.btnLogout.click()
        await delay(2000)
    }

    async continueShopping(){
        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        await delay(2000)
        await this.btnBurger.click()
        await delay(2000)
        await this.btnLogout.click()
        await delay(2000)
    }
    
}

export default new SuccessPage()
