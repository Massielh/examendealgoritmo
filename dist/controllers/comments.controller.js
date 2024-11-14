import { fetchData } from "../utils/fetch.js";
export async function getComments() {
    return fetchData('https://jsonplaceholder.typicode.com/comments');
}
