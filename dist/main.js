import { getPosts, getPostComments, getUserPosts } from './controllers/post.controller.js';
import { getComments } from './controllers/comments.controller.js';
import { getAlbums } from './controllers/albums.controller.js';
import { getPhotos } from './controllers/photo.controller.js';
import { getTodos } from './controllers/todo.controller.js';
import { getUsers } from './controllers/users.controller.js';
import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
export async function Menu() {
    console.log('\nSeleccione una opción:');
    console.log('1. Obtener cantidad de cada endpoint');
    console.log('2. Obtener comentarios de un post');
    console.log('3. Obtener posts de un usuario');
    console.log('4. Salir');
    rl.question('Ingrese su opción: ', async (option) => {
        switch (option) {
            case '1':
                const posts = await getPosts();
                const comments = await getComments();
                const albums = await getAlbums();
                const photos = await getPhotos();
                const todos = await getTodos();
                const users = await getUsers();
                console.log(`Posts: ${posts.length}`);
                console.log(`Comments: ${comments.length}`);
                console.log(`Albums: ${albums.length}`);
                console.log(`Photos: ${photos.length}`);
                console.log(`Todos: ${todos.length}`);
                console.log(`Users: ${users.length}`);
                break;
            case '2':
                rl.question('Ingrese el ID del post: ', async (postId) => {
                    const postComments = await getPostComments(parseInt(postId));
                    console.log(postComments);
                    Menu();
                });
                return;
            case '3':
                rl.question('Ingrese el ID del usuario: ', async (userId) => {
                    const userPosts = await getUserPosts(parseInt(userId));
                    console.log(userPosts);
                    Menu();
                });
                return;
            case '4':
                rl.close();
                return;
            default:
                console.log('Opción no válida');
        }
        Menu();
    });
}
Menu();
