class readPage {

    get read() {
        return $('//*[@id="security"]/div/div[4]/div[2]/card-skew')
        }
        async clickReadButton () {
            await this.read.click();
            console.log('Read is displayed In Viewport? ' + await this.read.isDisplayedInViewport())
        }
}

module.exports = new readPage()