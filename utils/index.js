import {TEST_PREFIX} from '../constants'

const createRandomShortString = () =>
    Math.random().toString(36).substring(2, 8)
export const generateTask = () => `${TEST_PREFIX + createRandomShortString()}`

export default {
    generateTask
}