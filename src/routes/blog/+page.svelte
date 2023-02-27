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
    <div class="flex flex-col items-center container">
    <h1 class="text-4xl font-bold">Blog</h1>
    </div>
    <div class="flex flex-row flex-wrap gap-8 items-left container mb-5">
    {#each data.posts.data as post}
        {#if post.publish_status == "published"}
            <a href="/blog/{post.slug}" class="flex flex-col flex-reverse items-left rounded-xl mt-5 gap-4 border-2 border-solid p-5 w-full hover:bg-thirdbackground transition-all">
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
{/if}