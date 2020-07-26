const baseURL = 'https://quotes.rest/qod?'

export function getQOD(category) {
    return fetch(`${baseURL}category=${category}&language=en`, {mode: 'cors'}).then(res => res.json());
}