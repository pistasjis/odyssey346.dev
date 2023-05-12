<script lang="ts">
	import type { PageData } from "./$types";

    import ReadMoreButton from "$lib/components/ReadMoreButton.svelte";

    import "$lib/styles/blogpost.css";

    import SvelteSeo from "svelte-seo";
	import InfoBanner from "$lib/components/InfoBanner.svelte";
	import Draft from "$lib/components/Draft.svelte";

    export let data: PageData;
</script>

<SvelteSeo
    title="{data.project.data[0].name} | Pistasjis"
    description="{data.project.data[0].description}"
    canonical="https://pistasjis.net/projects/{data.project.data[0].slug}"
    openGraph={{
        type: "article",
        url: `https://pistasjis.net/blog/${data.project.data[0].slug}`,
        title: `${data.project.data[0].name} | Pistasjis`,
        description: `${data.project.data[0].description}`,
        images: [
            {
                url: `${data.directus_api_url}/assets/${data.project.data[0].cover}/image.png?quality=50&width=1024&height=328`,
                alt: `${data.project.data[0].name}`,
            },
        ],
    }}
/>


<div class="flex flex-col justify-center items-center project">
            {#if data.project.data[0].status == "draft"}
            <Draft />
            {/if}
            <section class="second-background">
                <div class="flex flex-col gap-2 max-w-xl w-full">
                    <h1 class="text-4xl font-bold">{data.project.data[0].name}</h1>
                    <p class="text-xl">{data.project.data[0].description}</p>
                    {#if data.project.data[0].stack}
                        <div class="flex flex-row items-center gap-4 pb-2">
                            {#each data.project.data[0].stack as stack}
                                <div class="flex flex-row items-center gap-4">
                                    <p class="border-solid p-2 rounded-full border-2 text-center">{stack}</p>
                                </div>
                            {/each}
                        </div>
                    {/if}
                    {#if data.project.data[0].Cover}
                    <img src="{data.directus_api_url}/assets/{data.project.data[0].Cover}/image.png?quality=50&width=1024&height=328" alt={data.project.data[0].title} class="w-fit rounded-md" />
                    {/if}
                </div>
            </section>
        <div class="content">
            <div class="max-w-xl w-full">
                <div class="prose-override prose post flex flex-col items-left max-w-xl w-full">
                    {@html data.project.data[0].content}
                </div>
            </div>
            <!-- link -->
            <div class="endbuttons flex justify-between max-w-xl w-full">
                <ReadMoreButton href="/projects" text="Back to projects" />
                <ReadMoreButton href="{data.project.data[0].link}" text="Check it out" />
            </div>
        </div>
</div>