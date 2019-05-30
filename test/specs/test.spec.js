import reporter from 'wdio-allure-reporter'
import Dashboard from '../pages/test/dashboard.page'
import Schedule from '../pages/test/schedule.page'
import {FROM_DATA, TO_DATA, WHEN_DATA} from '../../constants'

import {assert} from 'chai'

describe('AWG test', () => {
  before(() => {
    browser.windowHandleSize({width: 1920, height: 1080})
  })

    it('Login', () => {
      browser.url('https://dou.ua/forums/topic/13389/');
      const title = browser.getTitle();
      assert.equal(title, 'Тестирование. Фундаментальная теория | DOU');
      reporter.feature('Feature')
  })
})
