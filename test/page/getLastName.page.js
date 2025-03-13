class getLastNamePage {

    get getLastName() {
        return $('#lastNameEng2')
        }
        async getSurname () {
          await this.getLastName.getText()

    }
}

module.exports = new getLastNamePage()