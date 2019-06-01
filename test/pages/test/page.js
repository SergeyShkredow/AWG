export default class Page {
  open (path = '') {
    browser.url(`https://todoist.com/${path}`)
  }

  isVisible (el) {
    return browser.isVisible(el.selector)
  }
}
