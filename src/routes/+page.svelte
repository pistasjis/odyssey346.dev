<script lang="ts">
    import Hero from '$lib/components/Hero.svelte';
    import Bio from '$lib/components/Bio.svelte';
    import Announcement from '$lib/components/Announcement.svelte';

    import SvelteSeo from 'svelte-seo';

    import type { PageData } from './$types';
    export let data: PageData;
</script>

<svelte:head>
    <title>Odyssey346</title>
</svelte:head>

<SvelteSeo
    title="Odyssey346"
    description="15 year old developer and sysadmin"
    canonical="https://odyssey346.dev"
    openGraph={{
        type: "article",
        url: `https://odyssey346.dev`,
        title: `Odyssey346`,
        description: `15 year old developer and sysadmin`,
    }}
/>

<div class="flex flex-col justify-center items-center container">
    <Hero />
    <Announcement data={data.kuma} />
    <Bio />
</div>