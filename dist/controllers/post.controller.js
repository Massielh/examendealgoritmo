import { fetchData } from '../utils/fetch.js';
export async function getPosts() {
    return fetchData('https://jsonplaceholder.typicode.com/posts');
}
export async function getPostComments(postId) {
    return fetchData(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
}
export async function getUserPosts(userId) {
    return fetchData(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
}
