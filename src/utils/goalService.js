/* Import tokenService to get authorization token for user */
import tokenService from './tokenService';

const baseURL = '/api/goals/';

export default {
    // FIXME: create index
    getGoals,
    createGoal,
    removeGoal,
    updateTask,
    deleteTask,
    editGoalDesc,
};

function deleteTask(tId, gId) {
    return fetch(baseURL + 'delete/' + gId + '/' + tId, {
        method: 'PUT',
        headers: new Headers({'authorization': 'Bearer ' + tokenService.getToken()})
    }).then(res => res.json());
}

function updateTask(tId, gId) {
    return fetch(baseURL + 'update/' + gId + '/' + tId, {
        method: 'PUT',
        headers: new Headers({'authorization': 'Bearer ' + tokenService.getToken()})
    }).then(res => res.json());
}

function removeGoal(id) {
    return fetch(baseURL + id, {
        method: 'DELETE',
        headers: new Headers({'authorization': 'Bearer ' + tokenService.getToken()})
    }).then(res => res.json());
}

function getGoals() {
    return fetch(baseURL + 'getGoals', {
        method: 'GET',
        headers: new Headers({'authorization': 'Bearer ' + tokenService.getToken()})
    })
    .then(res => res.json());
}

function createGoal(goal) {
    return fetch(baseURL + 'addgoal', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json', 'authorization': 'Bearer ' + tokenService.getToken()}),
        body: JSON.stringify(goal)
    })
    .then(res => {
        if (res.ok) return res.json();
    });
}

function editGoalDesc(id, description) {
    return fetch(baseURL + 'editgoaldesc/' + id, {
        method: 'PUT',
        headers: new Headers({'Content-Type': 'application/json', 'authorization': 'Bearer ' + tokenService.getToken()}),
        body: JSON.stringify(description)
    })
    .then(res => {
        if (res.ok) return res.json();
    });
}

