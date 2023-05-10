<script lang="ts">
	import type { PageData } from "./$types";
    import dayjs from "dayjs";
    import SvelteSeo from "svelte-seo";

    export let data: PageData;
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
        description: `Projects from Pistasjis`,
    }}
/>

{#if data}
<div class="flex flex-col justify-center items-center">
    <section class="second-background">
    <div class="flex flex-col w-full max-w-xl">
        <h1 class="text-4xl pb-1 font-bold">Projects</h1>
        <p class="text-xl">Projects I've worked on. You can see what skills I've learned from these in my bio.</p>
    </div>
    </section>
    <div class="flex gap-8 mb-5 flex-wrap w-full max-w-xl">
    {#each data.projects.data as project}
        {#if project.status == "published"}
        <a href="/projects/{project.name}" class="flex flex-col bg-fourthbackground mt-5 gap-4 border-b-2 border-solid p-5 hover:border-accent transition-all">
            <h1 class="text-4xl font-bold">{project.name}</h1>
            <img src="{data.directus_api_url}/assets/{project.Cover}/image.png?quality=50&width=1024&height=328" alt={project.title} class="w-fit rounded-md" />
            <p class="text-xl">{project.description}</p>
            <p>{dayjs (project.project_creation).format("ddd, DD MMM YYYY")}</p>
        </a>
        {/if}
    {/each}
    </div>
</div>
{:else}
    <div class="flex flex-col items-center container">
        <h1 class="text-4xl font-bold">Projects</h1>
        <p class="text-xl">No projects found</p>
    </div>
{/if}