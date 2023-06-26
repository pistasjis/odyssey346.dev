import { kuma } from "$lib/server/cache";
import axios from "axios";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";

const updateCache = async () => {
	try {
		const kumaResponse = await axios(
			"https://status.pistasjis.net/api/status-page/main"
		);

		if (kumaResponse.status === 200) {
			const markdown = await unified()
				.use(remarkParse)
				.use(remarkRehype)
				.use(rehypeSanitize)
				.use(rehypeStringify)
				.process(kumaResponse.data.incident.content);

			kumaResponse.data.incident.content = markdown.toString();

			kuma.set(kumaResponse.data);
		} else {
			kuma.set({ error: true, message: "Error: " + kumaResponse.status });
		}
	} catch (err) {
		console.log(err);
		kuma.set({ error: true, message: "Error: " + err });
	}
};

updateCache();

setInterval(updateCache, 30000);
