import type { PageServerLoad } from "./$types";
import { getProjects } from "$lib/server/content";
import { env } from "$env/dynamic/private";

export const load = (async () => {
    const projects = await getProjects();

    return {
        projects: projects,
        directus_api_url: env.directus_api_url,
    };
}) satisfies PageServerLoad