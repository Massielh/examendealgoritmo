import { fetchData } from "../utils/fetch.js";
export async function getUsers() {
    return fetchData('https://jsonplaceholder.typicode.com/users');
}
