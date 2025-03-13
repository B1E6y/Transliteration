class scrollToPassportPage {

    get scrollToPassport() {
        return $('/html/body/main/section[3]/article')
        }
        async scroll () {
         this.scrollToPassport.scrollIntoView()

    }
}

module.exports = new scrollToPassportPage()