class switchOffStylesPage {

    get switchStylesOff() {
        return $('#switch-styles')
        }
        async switchOff () {
         await this.switchStylesOff.click()
         

    }
}

module.exports = new switchOffStylesPage()