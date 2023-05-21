import type { PageServerLoad } from "./$types";
import { kuma } from "$lib/server/cache";
import { get } from "svelte/store";

export const load = (async () => {
    return {
        kuma: get(kuma),
    };
}) satisfies PageServerLoad