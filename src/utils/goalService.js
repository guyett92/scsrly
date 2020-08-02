const baseURL = '/api/goals';

function getGoals() {
    return fetch(baseURL).then(response => response.json());
}

function createGoal(data) {
    return fetch(baseURL, {
        method: 'POST',
        headers: {
            'Content-type': 'Application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json());
}

export default {
    getGoals,
    createGoal
}