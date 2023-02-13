<script lang="ts">
    import ReadMoreButton from "./ReadMoreButton.svelte";

    export let noReadMore: boolean = false;
</script>

<div class="flex flex-col items-left gap-4 mt-5 max-w-xl">
    <h2 class="text-2xl">About</h2>
    <p>I am a 15 year old developer and sysadmin from Norway.</p>
    <p>I really like messing around with computers. So why not make it a part of my identity? So that's why I am a sysadmin.</p>
    {#if !noReadMore}
    <ReadMoreButton href="/about" text="Read more" />
    {/if}
</div>