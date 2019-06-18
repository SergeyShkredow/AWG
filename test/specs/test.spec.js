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
  beforeEach(()=>{
    // Go to user dashboard
    Dashboard.logo.waitForVisible()
    browser.pause(500)
  })
  afterEach(() => {
    reporter.feature('Feature')
  })

  it('create quickly task', () => {
    const newTask = generateTask()
    // create new task
    Dashboard.addTask.waitForVisible()
    Dashboard.addTask.click()
    Dashboard.createTask(newTask)
  })

  it('create task in project', () => {
    const newTask = generateTask()
    // Go to name project
    Dashboard.projectLink.click()
    Dashboard.header.waitForVisible()
    // create new task
    Dashboard.addTaskProject.click()
    Dashboard.createTask(newTask)
  })

  it('create task with bind project', () => {
    const newTask = generateTask()
    const bindProject = NAME_PROJECT
    // create new task
    Dashboard.addTask.click()
    Dashboard.createTask(newTask, bindProject)
    // check newly task for choose project
    expect(browser.getText(Dashboard.setProject.selector)).to.equal('project_tests')
  })
})
