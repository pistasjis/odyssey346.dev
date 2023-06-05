<script lang="ts">
	import type { PageData } from "./$types";
	import dayjs from "dayjs";
	import SvelteSeo from "svelte-seo";

	export let data: PageData;
	import ContentCard from "$lib/components/Content/ContentCard.svelte";
</script>

<svelte:head>
	<title>Projects | Pistasjis</title>
</svelte:head>

<SvelteSeo
	title="Projects | Pistasjis"
	description="Projects from Pistasjis"
	canonical="https://pistasjis.net/projects"
	openGraph={{
		type: "article",
		url: `https://pistasjis.net/projects`,
		title: `Projects | Pistasjis`,
		description: `Projects from Pistasjis`
	}}
/>

{#if data}
	<div class="flex flex-col justify-center items-center">
		<section class="second-background">
			<div class="flex flex-col w-full max-w-xl">
				<h1 class="text-4xl pb-1 font-bold">Projects</h1>
				<p class="text-xl">
					Projects I've worked on. You can see what skills I've
					learned from these in my bio.
				</p>
			</div>
		</section>
		<div class="content mt-2">
			<div class="flex gap-8 mb-5 flex-wrap w-full max-w-xl">
				{#each data.projects.data as project}
					{#if project.status == "published"}
						<ContentCard
							contentTitle={project.title}
							contentName={project.name}
							apiUrl={data.directus_api_url}
							contentDescription={project.description}
							contentCover={project.Cover}
							contentType="project"
							contentDate={dayjs(project.date).format(
								"MMMM D, YYYY"
							)}
						/>
					{/if}
				{/each}
			</div>
		</div>
	</div>
{:else}
	<div class="flex flex-col items-center container">
		<h1 class="text-4xl font-bold">Projects</h1>
		<p class="text-xl">No projects found</p>
	</div>
{/if}
