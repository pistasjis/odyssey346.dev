import { kuma } from "$lib/server/cache";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";

const updateCache = async () => {
	try {
		const kumaResponse = await fetch(
			"https://status.pistasjis.net/api/status-page/main"
		).then((res) => res.json()).catch((err) => {
			console.log("h");
			kuma.set({ error: true, message: "Error: " + err });
		});

		const markdown = await unified()
			.use(remarkParse)
			.use(remarkRehype)
			.use(rehypeSanitize)
			.use(rehypeStringify)
			.process(kumaResponse.incident.content);

		kumaResponse.incident.content = markdown.toString();

		kuma.set(kumaResponse);
	} catch (err) {
		console.log("h2");
		kuma.set({ error: true, message: "Error: " + err });
	}
};

updateCache();

setInterval(updateCache, 30000);
