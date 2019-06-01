import reporter from 'wdio-allure-reporter'
import LoginPage from '../pages/test/login.page'
import Dashboard from '../pages/test/dashboard.page'
import {FROM_DATA, TO_DATA, WHEN_DATA} from '../../constants'

import {assert} from 'chai'

describe('AWG test', () => {
  before(() => {
    browser.windowHandleFullscreen()
    LoginPage.login()
  })

    it('Create quickly task', () => {

      reporter.feature('Feature')
  })
})
