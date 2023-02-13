import { env } from '$env/dynamic/private';
import { building } from "$app/environment";

if (!building) {
    if (!env.directus_api_url) {
        throw new Error('Missing env.directus_api_url');
    } else if (!env.directus_token) {
        throw new Error('Missing env.directus_token');
    }
}

export async function getPosts() {
    const posts = await fetch(`${env.directus_api_url}/items/Posts`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${env.directus_token}`,
        },
    }).then((res) => res.json());
    return posts;
}

export async function getPost(slug: string) {
    const post = await fetch(`${env.directus_api_url}/items/Posts?filter[slug][_eq]=${slug}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${env.directus_token}`,
        },
    }).then((res) => res.json());
    return post;
}

export async function getProjects() {
    const projects = await fetch(`${env.directus_api_url}/items/Projects`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${env.directus_token}`,
        },
    }).then((res) => res.json());
    return projects;
}

export async function getProject(slug: string) {
    const project = await fetch(`${env.directus_api_url}/items/Projects?filter[name][_eq]=${slug}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${env.directus_token}`,
        },
    }).then((res) => res.json());
    return project;
}