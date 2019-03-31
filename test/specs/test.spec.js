import Dashboard from '../pages/test/dashboard.page'
import Schedule from '../pages/test/schedule.page'
import {FROM_DATA, TO_DATA, WHEN_DATA} from '../../constants'

describe('TEST', () => {
  before(() => {
    browser.windowHandleSize({width: 1920, height: 1080})
  })

  it('choose list need trains', () => {
    browser.url('https://yandex.ru')
    Dashboard.allMenu.waitForVisible()
    Dashboard.allMenu.click()
    Dashboard.scheduleLink.waitForVisible()
    browser.pause(500)
    Dashboard.scheduleLink.click()
    Schedule.headerRasp.waitForVisible()
    browser.pause(1000)
    Schedule.chooseRoute(FROM_DATA, TO_DATA, WHEN_DATA)
  })
})
