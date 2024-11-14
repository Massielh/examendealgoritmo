import { fetchData } from "../utils/fetch.js";
export async function getTodos() {
    return fetchData('https://jsonplaceholder.typicode.com/todos');
}
