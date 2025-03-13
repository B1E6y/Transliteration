class explorePage {

    get explore() {
        return $('//*[@id="security"]/div/div[4]/div[1]/card-skew');
        }
        async clickExploreFocus () {
        this.explore.click();
        console.log('Explore is displayed In Viewport? ' + await this.explore.isDisplayedInViewport())
    }
}

module.exports = new explorePage()