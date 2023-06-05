<script lang="ts">
	export let contentType: string;
	export let contentName: string;
	export let apiUrl: string;
	export let contentCover: string;
	export let contentDate: string;
	export let contentTitle: string;
	export let contentDescription: string;
	export let contentSlug: string = "";

	export let url: string = "";

	import dayjs from "dayjs";

	if (contentType == "blog") {
		url = `/blog/${contentSlug}`;
	} else if (contentType == "project") {
		url = `/projects/${contentName}`;
	}
</script>

<a
	href={url}
	class="rounded-md flex flex-col bg-fourthbackground mt-5 gap-4 border-b-2 border-solid p-5 hover:border-accent transition-all"
>
	<h1 class="text-4xl font-bold">{contentName}</h1>
	{#if contentCover}
		<img
			src="{apiUrl}/assets/{contentCover}/image.png?quality=50&width=1024&height=328"
			alt={contentTitle}
			class="w-fit rounded-md"
		/>
	{/if}
	<p class="text-xl">{contentDescription}</p>
	<p>{dayjs(contentDate).format("ddd, DD MMM YYYY")}</p>
</a>
