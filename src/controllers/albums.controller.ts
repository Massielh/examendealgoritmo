import { fetchData } from "../utils/fetch.js";
import { Album } from "../interfaces/album.js";

export async function getAlbums(): Promise<Album[]> {
    return fetchData<Album[]>('https://jsonplaceholder.typicode.com/albums');
}