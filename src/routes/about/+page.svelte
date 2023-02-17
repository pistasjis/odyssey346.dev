<script lang="ts">
    import ReadMoreButton from "$lib/components/ReadMoreButton.svelte";
    import Hero from "$lib/components/Hero.svelte";
    import Bio from "$lib/components/Bio.svelte";

    import type { PageData } from "./$types";

    import SvelteSeo from "svelte-seo";

    import dayjs from "dayjs";

    export let data: PageData;
</script>

<svelte:head>
    <title>About | Odyssey346</title>
</svelte:head>

<SvelteSeo
    title="About | Odyssey346"
    description="About me and stuff"
    canonical="https://odyssey346.dev/about"
    openGraph={{
        type: "article",
        url: `https://odyssey346.dev/about`,
        title: `About | Odyssey346`,
        description: `About me and stuff`,
    }}
/>

<div class="flex flex-col justify-center items-center container">
    <Hero />
    <Bio noReadMore />
    <div class="flex flex-col items-left gap-4 mt-5 max-w-xl">
        <h2 class="text-2xl" id="donate">Donate</h2>
        <p>You can donate Monero to me if you want.</p>
        <p>My Monero address is: <code class="break-all bg-thirdbackground">45wYu3oEAhu7s9aodftL2iBztYCdKzTZ4gaTRXGRRsN8cfVbdDMrVCEDmUczBiosE3ESVtyRKodXKgcTThyNsF2XGJvee5V</code></p>
        <p>You can also put in odyssey346.dev in your Monero client if it supports OpenAlias.</p>
        <img src="/ha4t207b.bmp" alt="Monero donation QR code" class="w-1/2 rounded-xl" />
        <p class="text-xl">Thank you for your support!</p>
        <h2 class="text-2xl" id="Info">Info</h2>
        <p>This version of the website was built on <b>{dayjs (data.version.name).format("dddd, DD MMM YYYY h:mm A")}</b>.</p>
        <ReadMoreButton href="/" text="Want to go back home?" />
    </div>
</div>