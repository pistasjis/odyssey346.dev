<script lang="ts">
	import type { PageData } from './$types';

	import ReadMoreButton from '$lib/components/ReadMoreButton.svelte';

	import SvelteSeo from 'svelte-seo';

	import '$lib/styles/blogpost.css';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.post.data[0].title} | Odyssey346</title>
</svelte:head>

<SvelteSeo
	title="{data.post.data[0].title} | Odyssey346"
	description={data.post.data[0].description}
	canonical="https://odyssey346.dev/blog/{data.post.data[0].slug}"
	openGraph={{
		type: 'article',
		url: `https://odyssey346.dev/blog/${data.post.data[0].slug}`,
		title: `${data.post.data[0].title} | Odyssey346`,
		description: `${data.post.data[0].description}`,
		images: [
			{
				url: `${data.directus_api_url}/assets/${data.post.data[0].cover}/image.png?quality=50&width=1024&height=328`,
				alt: `${data.post.data[0].title}`
			}
		]
	}}
/>

<div class="flex flex-col justify-center items-center container">
	<div class="flex flex-col items-center">
		<div class="pb-2 flex flex-col items-center gap-4">
			<h1 class="text-4xl font-bold">{data.post.data[0].title}</h1>
			<p class="text-xl">{data.post.data[0].description}</p>
			{#if data.post.data[0].cover}
			<img
				src="{data.directus_api_url}/assets/{data.post.data[0]
					.cover}/image.png?quality=50&width=1024&height=328"
				alt={data.post.data[0].title}
				class="w-fit rounded-2xl"
			/>
			{/if}
			{#if data.post.data[0].publish_status == 'draft'}
				<div class="flex flex-col gap-2 p-4 mt-5 rounded-2xl border-3 border-solid border-[#0dcaf0]">
					<div class="flex flex-row gap-2 items-center">
						<div class="i-tabler-info-circle text-2xl" />
						<p class="text-2xl">This post is a draft!</p>
					</div>
					<p>This blog post is a work in progress. Some parts might be unfinished, there could be grammar issues and it is in no way finished.</p>
				</div>
			{/if}
		</div>
		<div class="prose post pt-2 flex flex-col items-left">
			{@html data.post.data[0].content}
		</div>
		<div class="endbuttons flex justify-between w-full mt-5">
			<ReadMoreButton href="/blog" text="Back to blog" />
			<ReadMoreButton
				href="mailto:hi@odyssey346.dev?subject=Feedback on your blog article '{data.post.data[0]
					.title}'"
				text="Send feedback on E-mail"
			/>
		</div>
	</div>
</div>
