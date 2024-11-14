import { fetchData } from "../utils/fetch.js";
import { Comment } from "../interfaces/comment.js";

export async function getComments(): Promise<Comment[]> {
    return fetchData<Comment[]>('https://jsonplaceholder.typicode.com/comments');
}