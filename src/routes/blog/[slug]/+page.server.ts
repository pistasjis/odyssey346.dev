import type { PageServerLoad } from "./$types";
import { getPost } from "$lib/server/content";
import { error } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";

export const load = (async ({ params }) => {
    const post = await getPost(params.slug);

    if (post.error) {
        throw error(404, "Post not found");
    } else if (post.data.length === 0) {
        throw error(404, "Post not found");
    }

    return {
        post: post,
        directus_api_url: env.directus_api_url,
    };
}) satisfies PageServerLoad