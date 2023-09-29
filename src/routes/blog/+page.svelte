<script lang="ts">
	import type { PageData } from "./$types";
	import dayjs from "dayjs";
	export let data: PageData;

	import SvelteSeo from "svelte-seo";
	import ContentCard from "$lib/components/Content/ContentCard.svelte";
</script>

<svelte:head>
	<title>Blog | Pistasjis</title>
</svelte:head>

<SvelteSeo
	title="Blog | Pistasjis"
	description="Blog posts from Pistasj"
	canonical="https://pistasjis.net/blog"
	openGraph={{
		type: "article",
		url: `https://pistasjis.net/blog`,
		title: `Blog | Pistasjis`,
		description: `Blog posts from Pistasj`
	}}
/>

{#if data}
	<div class="flex flex-col justify-center items-center">
		<section class="second-background">
			<div class="flex flex-col w-full max-w-xl">
				<h1 class="text-4xl pb-1 font-bold">Blog</h1>
				<p class="text-xl">
					Blog posts I've written. I focus on technical and meta
					stuff.
				</p>
			</div>
		</section>
		<div class="content mt-2">
			<div
				class="flex flex-wrap gap-8 items-left mb-5 w-full justify-center"
			>
				{#each data.posts.data as post}
					{#if post.publish_status == "published"}
						<ContentCard
							contentTitle={post.title}
							contentName={post.title}
							contentSlug={post.slug}
							apiUrl={data.directus_api_url}
							contentDescription={post.description}
							contentCover={post.cover}
							contentType="blog"
							contentDate={post.date}
						/>
					{/if}
				{/each}
			</div>
		</div>
	</div>
{/if}
