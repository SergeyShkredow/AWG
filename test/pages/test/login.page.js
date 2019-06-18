import Page from './page'
import {USER_PASS,USER_EMAIL} from "../../../constants"

class LoginPage extends Page {

    get emailFrame () { return browser.element('#email') }
    get passwordFrame () { return browser.element('#password') }
    get btnEnter () { return browser.element('.submit_btn') }
    get logo () { return browser.element('.standalone_page__logo') }

    open () {
        super.open('/Users/showLogin')
    }

    login({email = USER_EMAIL, password = USER_PASS} = {}) {
        this.open()
        this.logo.waitForVisible()
        this.emailFrame.setValue(email)
        this.passwordFrame.setValue(password)
        this.btnEnter.click()
    }
}
export default new LoginPage()