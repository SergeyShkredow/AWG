import Page from './page'

class SchedulePage extends Page {
  get headerRasp () { return browser.element('h1=Расписание пригородного и междугородного транспорта') }
  get menuSuburban () { return browser.element('a=электричка') }
  get fromInput () { return browser.element('#from') }
  get toInput () { return browser.element('#to') }
  get whenInput () { return browser.element('#when') }
  get findBtn () { return browser.element('span=Найти') }
  get searchSegmentItem () { return browser.elements('.SearchSegment_isVisible') }

  open () {
    super.open('')
  }
  chooseRoute (fromData, toData, whenData) {
    this.fromInput.setValue(fromData)
    this.toInput.setValue(toData)
    this.whenInput.setValue(whenData)
    this.findBtn.click()
    browser.pause(4000)
    const beforeFilter = $$(this.searchSegmentItem.selector).length
    this.menuSuburban.click()
    browser.waitUntil(() => {
      return beforeFilter > $$(this.searchSegmentItem.selector).length
    }, 10000, 'Search failed')
    browser.pause(2000)
  }
}

export default new SchedulePage()
