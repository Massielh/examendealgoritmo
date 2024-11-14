import { fetchData } from "../utils/fetch.js";
import { User } from "../interfaces/user.js";

export async function getUsers(): Promise<User[]> {
  return fetchData<User[]>('https://jsonplaceholder.typicode.com/users');
}