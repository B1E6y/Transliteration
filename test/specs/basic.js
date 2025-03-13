const assert = require('assert')
const setFirstNamePage = require('../page/setFirstName.page')
const setLastNamePage = require('../page/setLastName.page.js') 
const switchStylesPage = require('../page/switchStyles.page.js') 
const switchOffStylesPage = require('../page/switchOffStyles.page.js')
const clickOnConfirmPage = require('../page/clickOnConfirm.page.js') 
const scrollToPassportPage = require('../page/scrollToPassport.page.js') 
const getLastNamePage = require('../page/getLastName.page.js')
const getFirstNamePage = require('../page/getFirstName.page.js')

describe('Go to website Transliteration, set persal data in Ukrainin and get it in Englinsh', async () => {
    
    it('Go to website of transliteration Ukrainian to English', async () => {
        browser.url('https://dmsu.gov.ua/services/transliteration.html');
        })

    it('Checking the clickability of the button "Eye for swith style of interface"', async () => {
        switchStylesPage.switch();
        })
    
    it('Turn off dark style of interface', async () => {
        switchOffStylesPage.switchOff();
        })    
           
    it('Set surname', async () => {
        setFirstNamePage.setMyName('Левченко');
        })

    it('Set first name', async () => {
        setLastNamePage.setMySurname('Олексій');
        }) 
    
    it('Click on surname field', async () => {
        clickOnConfirmPage.confirmButton();
        })

    it('Scroll into View to additional information', async () => {
        scrollToPassportPage.scroll();
        }) 
    
    it('Get last name', async () => {
        getLastNamePage.getSurname();
        }) 

    it('Get first name', async () => {
        getFirstNamePage.getName();
        })   
    }
)