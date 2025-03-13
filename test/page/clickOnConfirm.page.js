class clickOnConfirmPage {

    get clickOnButton() {
        return $('/html/body/main/section[2]/article/div/div/form/div[2]/div/button')
        }
        async confirmButton () {
        await this.clickOnButton.click()

    }
}

module.exports = new clickOnConfirmPage()