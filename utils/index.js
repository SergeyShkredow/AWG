import {TEST_PREFIX, NAME_PROJECT} from '../constants'
import rp from 'request-promise'
import uuid4 from 'uuid.v4'
import {assert} from 'chai'

let accessToken ='aadebbf45c0b1743fb45e4882e963376f9e9ae41'
let idProject = ''

const createRandomShortString = () =>
    Math.random().toString(36).substring(2, 8)
export const generateTask = () => `${TEST_PREFIX + createRandomShortString()}`

export const getNewTasks = (newTask) => {
    const getTask = {
        uri: `https://beta.todoist.com/API/v8/tasks?project_id=2211344481`,
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${accessToken}`,
        },
        json: true
    };
    rp(getTask)
        .then(function (repos) {
            console.log('repos', repos)
            // let contentName = repos.content;
            assert.include(repos, { content: newTask }, 'object contains property');
        })
        .catch(function (err) {
            console.log(err)
        });
}

export const createProject = () => {
    const createPR = {
        uri: 'https://beta.todoist.com/API/v8/projects',
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            "X-Request-Id": uuid4(),
            'Content-Type': 'application/json'
        },
        body: {
            "name": NAME_PROJECT
        },
        json: true
    };
    rp(createPR)
        .then(function (repos) {
            idProject = repos.id
            assert.equal(repos.name, NAME_PROJECT)
        })
        .catch(function (err) {
            console.log(err)
        });
}
export const removeProject = () => {
    const removePR = {
        uri: `https://beta.todoist.com/API/v8/projects/${idProject}`,
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
    };
    if(!idProject){
        return;
    }
    rp(removePR)
        .then(function (repos) {
        })
        .catch(function (err) {
            console.log(err)
        });
}

export default {
    generateTask
}