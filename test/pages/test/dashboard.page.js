import Page from './page'

class DashboardPage extends Page {
  get logo () { return browser.element('.home-logo__default') }

  open () {
    super.open('/')
    browser.pause(300)
  }
}

export default new DashboardPage()
