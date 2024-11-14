import { fetchData } from "../utils/fetch.js";
import { Photo } from "../interfaces/photo.js";

export async function getPhotos(): Promise<Photo[]> {
    return fetchData<Photo[]>('https://jsonplaceholder.typicode.com/photos');
}