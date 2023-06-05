import type { PageServerLoad } from "./$types";
import { getProject } from "$lib/server/content";
import { error } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";

export const load = (async ({ params }) => {
	const project = await getProject(params.slug);

	if (project.error) {
		throw error(404, "Post not found");
	} else if (project.data.length === 0) {
		throw error(404, "Post not found");
	}

	return {
		project: project,
		directus_api_url: env.directus_api_url
	};
}) satisfies PageServerLoad;
