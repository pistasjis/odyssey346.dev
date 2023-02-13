import type { PageServerLoad } from "./$types";
import { getPosts } from "$lib/server/content";
import { env } from "$env/dynamic/private";

export const load = (async () => {
    const posts = await getPosts();

    return {
        posts: posts,
        directus_api_url: env.directus_api_url,
    };
}) satisfies PageServerLoad