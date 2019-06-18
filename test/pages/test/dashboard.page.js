import Page from './page'
import {expect} from 'chai'

class DashboardPage extends Page {
  get logo () { return browser.element('#logo') }
  get table () { return browser.element('#editor') }
  get addTask () { return browser.element('#quick_add_task_holder') }
  get addInput () { return browser.element('.richtext_editor') }
  get btnAdd () { return browser.element('.submit_btn') }
  get rowSearch () { return browser.element('.quick_find.fixed_pos') }
  get findItem () { return browser.element('.sel_item_content') }
  get projectLink () { return browser.element('span=project_tests') }
  get addTaskProject () { return browser.element('.action_add_item') }
  get header () { return browser.element('.project_link') }
  get setProject () { return browser.element('.column_project') }

  open () {
    super.open('/')
  }

  createTask (task, bindProject) {
    // check visibility field for create task
    this.addInput.waitForVisible()
    if (bindProject) {
      this.addInput.setValue(bindProject)
      browser.keys('Enter')
    }
    // fill in the task name field
    this.addInput.setValue(task)
    this.btnAdd.click()
    // check created new task
    this.rowSearch.waitForVisible()
    this.rowSearch.setValue(task)
    browser.keys('Enter')
    expect(browser.getText(this.findItem.selector)).to.equal(task)
  }
}
export default new DashboardPage()
