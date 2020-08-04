const baseURL = '/api/goals/';

export default {
    getGoals,
    createGoal
};

function getGoals() {
    return fetch(baseURL).then(res => res.json());
}

function createGoal(goal) {
    return fetch(baseURL + 'addgoal', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(goal)
    })
    .then(res => {
        if (res.ok) return res.json();
    });
}

