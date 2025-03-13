class setLastNamePage {

    get setName() {
        return $('/html/body/main/section[2]/article/div/div/form/div[1]/div/input[2]')
        }
        async setMySurname(value) {
            await this.setName.setValue(value);

    }
}

module.exports = new setLastNamePage()