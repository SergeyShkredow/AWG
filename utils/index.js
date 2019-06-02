import {TEST_PREFIX} from '../constants'
export const getFrame = (selector) => $(selector).value

const createRandomShortString = () =>
    Math.random().toString(36).substring(2, 8)
export const generateTask = () => `${TEST_PREFIX + createRandomShortString()}`

export default {
    getFrame,
    generateTask
}