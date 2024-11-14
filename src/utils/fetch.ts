import fetch from 'node-fetch';

export async function fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Error al obtener datos de ${url}`);
    }
    const data: unknown = await response.json();
    return data as T;
}