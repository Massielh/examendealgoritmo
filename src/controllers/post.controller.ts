import { fetchData } from '../utils/fetch.js';
import { Post } from '../interfaces/post';

export async function getPosts(): Promise<Post[]> {
  return fetchData<Post[]>('https://jsonplaceholder.typicode.com/posts');
}

export async function getPostComments(postId: number): Promise<Comment[]> {
  return fetchData<Comment[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
}

export async function getUserPosts(userId: number): Promise<Post[]> {
  return fetchData<Post[]>(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
}

