import LoginPage from '../pages/test/login.page'
import Dashboard from '../pages/test/dashboard.page'
import {generateTask, getNewTasks, createProject, removeProject} from '../../utils'
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

  it('create task in project', function () {
    this.retries(1)
    const newTask = generateTask()
    // preparation of test data with API
    createProject()
    // Go to name project
    browser.refresh()
    Dashboard.projectLink.waitForEnabled()
    Dashboard.projectLink.click()
    Dashboard.header.waitForVisible()
    // create new task
    Dashboard.addTaskProject.click()
    Dashboard.createTask({newTask})
  })

  // remove test of data with API
  it('delete new project with API', () => {
    removeProject()
  })

  it('create quickly task', () => {
    const newTask = generateTask()
    // create new task
    Dashboard.addTask.waitForVisible()
    Dashboard.addTask.click()
    Dashboard.createTask({newTask})
  })

  it('create task with bind project', () => {
    const newTask = generateTask()
    // create new task
    Dashboard.addTask.click()
    Dashboard.createTask({bindProject: '#project_tests', newTask})
    // check newly task for choose project
    expect(browser.getText(Dashboard.setProject.selector)).to.equal('project_tests')
    // check create new task in project with API
    getNewTasks(newTask)
  })

  it('tests', () => {
    Dashboard.addTask.waitForVisible()
  })
})
