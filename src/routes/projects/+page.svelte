<script lang="ts">
	import type { PageData } from "./$types";
    import dayjs from "dayjs";
    import SvelteSeo from "svelte-seo";

    export let data: PageData;
</script>


<svelte:head>
    <title>Projects | Odyssey346</title>
</svelte:head>

<SvelteSeo
    title="Projects | Odyssey346"
    description="Projects from Odyssey346"
    canonical="https://odyssey346.dev/projects"
    openGraph={{
        type: "article",
        url: `https://odyssey346.dev/projects`,
        title: `Projects | Odyssey346`,
        description: `Projects from Odyssey346`,
    }}
/>

{#if data}
    <div class="flex flex-col items-center container">
    <h1 class="text-4xl font-bold">Projects</h1>
    </div>
    <div class="flex flex-row flex-wrap gap-8 items-left container mb-5">
    {#each data.projects.data as project}
        {#if project.status == "published"}
        <a href="/projects/{project.name}" class="flex flex-col items-left rounded-xl mt-5 gap-4 border-2 border-solid p-5 w-full hover:bg-thirdbackground transition-all">
            <h1 class="text-4xl font-bold">{project.name}</h1>
            <img src="{data.directus_api_url}/assets/{project.Cover}/image.png?quality=50&width=1024&height=328" alt={project.title} class="w-fit rounded-xl" />
            <p class="text-xl">{project.description}</p>
            <p>{dayjs (project.project_creation).format("ddd, DD MMM YYYY")}</p>
        </a>
        {/if}
    {/each}
    </div>
{/if}