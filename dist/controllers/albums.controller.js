import { fetchData } from "../utils/fetch.js";
export async function getAlbums() {
    return fetchData('https://jsonplaceholder.typicode.com/albums');
}
