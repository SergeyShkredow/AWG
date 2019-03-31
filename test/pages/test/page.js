export default class Page {
    open (path = '') {
        browser.url(`https://yandex.ru/${path}`)
    }

    isVisible (el) {
        return browser.isVisible(el.selector)
    }
}
