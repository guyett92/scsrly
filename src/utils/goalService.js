import tokenService from './tokenService';

const baseURL = '/api/goals/';

export default {
    // FIXME: create index
    getGoals,
    createGoal
};

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

