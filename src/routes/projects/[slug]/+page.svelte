<script lang="ts">
	import type { PageData } from "./$types";

    import ReadMoreButton from "$lib/components/ReadMoreButton.svelte";

    import "$lib/styles/blogpost.css";

    import SvelteSeo from "svelte-seo";
	import InfoBanner from "$lib/components/InfoBanner.svelte";

    export let data: PageData;
</script>

<SvelteSeo
    title="{data.project.data[0].name} | Odyssey346"
    description="{data.project.data[0].description}"
    canonical="https://odyssey346.dev/projects/{data.project.data[0].slug}"
    openGraph={{
        type: "article",
        url: `https://odyssey346.dev/blog/${data.project.data[0].slug}`,
        title: `${data.project.data[0].name} | Odyssey346`,
        description: `${data.project.data[0].description}`,
        images: [
            {
                url: `${data.directus_api_url}/assets/${data.project.data[0].cover}/image.png?quality=50&width=1024&height=328`,
                alt: `${data.project.data[0].name}`,
            },
        ],
    }}
/>


<div class="flex flex-col justify-center items-center container p-5 project">
    <div class="flex flex-col items-center">
        <div class="py-2 flex flex-col gap-4">
            {#if data.project.data[0].status == "draft"}
                <InfoBanner title="This project page is a draft!" content="This project page is a draft and is not yet published to the public." />
            {/if}
            <h1 class="text-4xl font-bold">{data.project.data[0].name}</h1>
            <p class="text-xl">{data.project.data[0].description}</p>
            {#if data.project.data[0].stack}
                <div class="flex flex-row items-center gap-4 pb-2">
                    {#each data.project.data[0].stack as stack}
                        <div class="flex flex-row items-center gap-4">
                            <p class="border-solid p-2 rounded-2xl border-2 text-center">{stack}</p>
                        </div>
                    {/each}
                </div>
            {/if}
            {#if data.project.data[0].Cover}
            <img src="{data.directus_api_url}/assets/{data.project.data[0].Cover}/image.png?quality=50&width=1024&height=328" alt={data.project.data[0].title} class="w-fit rounded-xl" />
            {/if}
        </div>
        <div class="prose post flex flex-col items-left">
            {@html data.project.data[0].content}
        </div>
        <!-- link -->
        <div class="endbuttons flex justify-between w-full">
            <ReadMoreButton href="/projects" text="Back to projects" />
            <ReadMoreButton href="{data.project.data[0].link}" text="Check it out" />
        </div>
    </div>
</div>

<style>
    @media screen and (max-width: 768px) {
        .project {
            width: 90%;
        }
    }
</style>