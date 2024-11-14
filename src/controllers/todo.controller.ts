import { fetchData } from "../utils/fetch.js";
import { Todo } from "../interfaces/todo.js";

export async function getTodos(): Promise<Todo[]> {
    return fetchData<Todo[]>('https://jsonplaceholder.typicode.com/todos');
}