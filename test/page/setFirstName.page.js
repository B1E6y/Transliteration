class clickOnSurnamePage {

    get setName() {
        return $('/html/body/main/section[2]/article/div/div/form/div[1]/div/input[1]');
        }
        async setMyName(value) {
        await this.setName.setValue(value);
        
    }
}

module.exports = new clickOnSurnamePage()