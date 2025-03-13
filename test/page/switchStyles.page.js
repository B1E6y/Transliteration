class switchStylesPage {

    get switchStyles() {
        return $('#switch-styles')
        }
        async switch () {
         await this.switchStyles.click()
         

    }
}

module.exports = new switchStylesPage()