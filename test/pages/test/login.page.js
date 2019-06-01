import Page from './page'
import {USER_PASS,USER_EMAIL} from "../../../constants"
import {getFrame} from "../../../utils";

class LoginPage extends Page {

    get linkLogin () { return browser.element('[href="/Users/showLogin"]') }
    get formLogin () { return browser.element('td=Вход') }
    get formFrame () { return browser.element('iframe') }
    get emailFrame () { return browser.element('#email') }
    get passwordFrame () { return browser.element('#password') }
    get btnEnter () { return browser.element('.submit_btn') }

    get switchToTypeFrame () { return browser.element('#GB_frame') }
    get switchToEmailFrame () { return browser.frame(getFrame('#email')) }
    // get frame () { return browser.element('iframe[name="GB_frame"]') }

    open () {
        super.open('/')
        browser.pause(500)
    }
    // switchFrame (frame) {
    //     browser.frame()
    //     this[frame]
    // }

    submitForm () {
        this.switchFrame()
        this.btnEnter.click()
    }

    login ({ email = USER_EMAIL, password = USER_PASS} = {}) {
        this.open()
        this.linkLogin.click()
        this.formFrame.waitForEnabled()
        browser.pause(1000)
        let my_frame = $('iframe[name="GB_frame"]').value
        // console.log(my_frame)
        // browser.frame(my_frame)
        let test = browser.frame(my_frame)
        console.log(test)
        // this.emailFrame.setValue(email)
        browser.debug()
        // this.passwordFrame.setValue(password)
        // this.submitForm()
    }
}

export default new LoginPage()