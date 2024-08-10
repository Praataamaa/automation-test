class YourInformationPage{

    get inputFirstName(){
        return $('//*[@id="first-name"]')
    }

    get inputLastName(){
        return $('//*[@id="last-name"]')
    }
 
    get inputPostalCode(){
        return $('//*[@id="postal-code"]')
    }

    get btnContinue(){
        return $('//*[@id="continue"]')
    }

    async Information(fistname, lastname, postalcode){
        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        await delay(2000);
        await this.inputFirstName.setValue(fistname)
        await this.inputLastName.setValue(lastname)
        await this.inputPostalCode.setValue(postalcode)
        await delay(2000);
        await this.btnContinue.click()
    }
    
}

export default new YourInformationPage()
