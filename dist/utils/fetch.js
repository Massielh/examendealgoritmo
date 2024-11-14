import fetch from 'node-fetch';
export async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Error al obtener datos de ${url}`);
    }
    const data = await response.json();
    return data;
}
