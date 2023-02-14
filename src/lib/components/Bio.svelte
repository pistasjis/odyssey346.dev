<script lang="ts">
    import ReadMoreButton from "./ReadMoreButton.svelte";

    export let noReadMore: boolean = false;
</script>

<div class="flex flex-col items-left gap-4 mt-5 max-w-xl w-full">
    <h2 class="text-2xl">About</h2>
    <p>I am a 15 year old developer and sysadmin from Norway.</p>
    <p>I enjoy metal/rock music, sometimes taking pictures and looking at cats.</p>
    {#if !noReadMore}
    <ReadMoreButton href="/about" text="Read more" />
    {/if}
</div>