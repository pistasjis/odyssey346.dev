<script lang="ts">
	import type { PageData } from "./$types";

	import ReadMoreButton from "$lib/components/ReadMoreButton.svelte";

	import SvelteSeo from "svelte-seo";

	import "$lib/styles/blogpost.css";

	import Draft from "$lib/components/Draft.svelte";

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.post.data[0].title} | Pistasjis</title>
</svelte:head>

<SvelteSeo
	title="{data.post.data[0].title} | Pistasjis"
	description={data.post.data[0].description}
	canonical="https://pistasjis.net/blog/{data.post.data[0].slug}"
	openGraph={{
		type: "article",
		url: `https://pistasjis.net/blog/${data.post.data[0].slug}`,
		title: `${data.post.data[0].title} | Pistasjis`,
		description: `${data.post.data[0].description}`,
		images: [
			{
				url: `${data.directus_api_url}/assets/${data.post.data[0].cover}/image.png?quality=50&width=1024&height=328`,
				alt: `${data.post.data[0].title}`
			}
		]
	}}
/>

<div class="flex flex-col items-center justify-center">
	<section class="second-background">
		<div class="max-w-xl w-full">
			<h1 class="text-4xl font-bold pb-1">{data.post.data[0].title}</h1>
			<p class="text-xl">{data.post.data[0].description}</p>
			{#if data.post.data[0].cover}
				<div
					id="image-container"
					class="pt-2.5"
				>
					<img
						src="{data.directus_api_url}/assets/{data.post.data[0]
							.cover}/image.png?quality=50&width=1024&height=328"
						alt={data.post.data[0].title}
						class="w-fit rounded-md"
					/>
				</div>
			{/if}
			{#if data.post.data[0].publish_status == "draft"}
				<Draft />
			{/if}
		</div>
	</section>
	<div class="pb-2" />
	<div class="max-w-xl w-full content">
		<div class="prose post pt-2 flex flex-col items-left">
			{@html data.post.data[0].content}
		</div>
	</div>
	<div class="endbuttons flex justify-between w-full max-w-xl mb-5">
		<ReadMoreButton
			href="/blog"
			text="Back to blog"
		/>
		<ReadMoreButton
			href="mailto:hi@pistasjis.net?subject=Feedback on your blog article '{data
				.post.data[0].title}'"
			text="Send feedback on E-mail"
		/>
	</div>
</div>
