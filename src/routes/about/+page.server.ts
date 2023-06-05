import type { PageServerLoad } from "./$types";
import { version } from "$app/environment";

export const load = (async () => {
	return {
		version: version
	};
}) as PageServerLoad;
