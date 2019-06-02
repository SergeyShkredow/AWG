import reporter from 'wdio-allure-reporter'
import LoginPage from '../pages/test/login.page'
import Dashboard from '../pages/test/dashboard.page'

import {NAME_PROJECT} from '../../constants/index'
import {generateTask} from '../../utils'
import {expect} from 'chai'

describe('TODO:', () => {
  before(() => {
    browser.windowHandleFullscreen()
    // Precondition: User sign in
    LoginPage.login()
  })

  it('create quickly task', () => {
    const newTask = generateTask()
    // Go to user dashboard
    Dashboard.logo.waitForVisible()
    browser.pause(1000)
    // create new task
    Dashboard.addTask.click()
    Dashboard.createTask(newTask)
    reporter.feature('Feature')
  })

  it('create task in project', () => {
    const newTask = generateTask()
    Dashboard.logo.waitForVisible()
    browser.pause(1000)
    // Go to name project
    Dashboard.projectLink.click()
    Dashboard.header.waitForVisible()
    // create new task
    Dashboard.addTaskProject.click()
    Dashboard.createTask(newTask)
    reporter.feature('Feature')
  })

  it('create task with bind project', () => {
    const newTask = generateTask()
    const bindProject = NAME_PROJECT
    Dashboard.logo.waitForVisible()
    browser.pause(1000)
    // create new task
    Dashboard.addTask.click()
    Dashboard.createTask(newTask, bindProject)
    // check newly task for choose project
    expect(browser.getText(Dashboard.setProject.selector)).to.equal('project_tests')
    reporter.feature('Feature')
  })
})
