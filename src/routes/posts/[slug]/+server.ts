import type { ServerLoad } from "@sveltejs/kit";
import { redirect } from "@sveltejs/kit";

export const GET: ServerLoad = async ({params}) => {
    throw redirect(307, `/blog/${params.slug}`)
}