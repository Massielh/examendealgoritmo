import { fetchData } from "../utils/fetch.js";
export async function getPhotos() {
    return fetchData('https://jsonplaceholder.typicode.com/photos');
}
