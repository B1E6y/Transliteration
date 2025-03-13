class getFirstNamePage {

    get getFirstName() {
        return $('#firstNameEng2')
        }
        async getName () {
          await this.getFirstName.getText()

    }
}

module.exports = new getFirstNamePage()