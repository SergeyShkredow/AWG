import Page from './page'

class DashboardPage extends Page {
  get logo () { return browser.element('.home-logo__default') }
  get allMenu () { return browser.element('.home-tabs__more-switcher.dropdown2__switcher') }
  get scheduleLink () { return browser.element('a=Расписания') }

  open () {
    super.open('/')
    browser.pause(300)
  }
}

export default new DashboardPage()
