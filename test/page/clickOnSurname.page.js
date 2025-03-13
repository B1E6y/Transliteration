class clickOnSurnamePage {

    get surnameClick() {
        return $('/html/body/main/section[2]/article/div/div/form/div[1]/div/input[1]')
        }
        async surnameField () {
             await this.surnameClick.click()

    }
}

module.exports = new clickOnSurnamePage()