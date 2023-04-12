<script lang="ts">
	import type { PageData } from "./$types";
    import dayjs from "dayjs";
    export let data: PageData;

    import SvelteSeo from "svelte-seo";
</script>


<svelte:head>
    <title>Blog | Odyssey346</title>
</svelte:head>

<SvelteSeo
    title="Blog | Odyssey346"
    description="Blog posts from Odyssey346"
    canonical="https://odyssey346.dev/blog"
    openGraph={{
        type: "article",
        url: `https://odyssey346.dev/blog`,
        title: `Blog | Odyssey346`,
        description: `Blog posts from Odyssey346`,
    }}
/>

{#if data}
<div class="container">
    <div class="flex flex-col">
        <h1 class="text-4xl pb-1 font-bold bg-clip-text bg-gradient-to-r from-accent to-blue-300 text-transparent">Blog</h1>
        <p class="text-xl">Blog posts I've written. I focus on technical and meta stuff.</p>
    </div>
    <div class="flex flex-row flex-wrap gap-8 items-left mb-5">
    {#each data.posts.data as post}
        {#if post.publish_status == "published"}
            <a href="/blog/{post.slug}" class="flex flex-col items-left rounded-xl mt-5 gap-4 border-2 border-solid p-5 hover:border-accent transition-all">
                <h1 class="text-4xl font-bold">{post.title}</h1>
                {#if post.cover}
                <img src="{data.directus_api_url}/assets/{post.cover}/image.png?quality=50&width=1024&height=328" alt={post.title} class="w-fit rounded-xl" />
                {/if}
                <p class="text-xl">{post.description}</p>
                <p>{dayjs (post.date_created).format("ddd, DD MMM YYYY HH:mm")}</p>
            </a>
        {/if}
    {/each}
    </div>
</div>
{/if}
