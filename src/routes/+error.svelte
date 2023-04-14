<script lang="ts">
    import Hero from "$lib/components/Hero.svelte";
    import { page } from "$app/stores";
    import ReadMoreButton from "$lib/components/ReadMoreButton.svelte";
</script>


<div class="flex flex-col justify-center items-center container">
    <Hero />
	<div class="flex flex-col items-left justify-left gap-2 announcement mt-5 p-4 rounded-3xl w-full max-w-xl">
		<div class="flex flex-row items-center justify-left gap-2">
            {#if $page.status === 404}
                <div class="i-tabler-info-circle text-2xl" />
            {/if}
            {#if $page.status === 500}
                <div class="i-tabler-alert-circle text-2xl" />
            {/if}
            <h2 class="text-2xl">{$page.status}</h2>
        </div>
        <p>{$page.error?.message}</p>
        {#if $page.status === 404}
            <ReadMoreButton href="/" text="Want to go back home?" />
        {/if}
    </div>
</div>

{#if $page.status === 404}
<style>
    .announcement {
        border: 3px solid #0dcaf0;
    }
</style>
{/if}

{#if $page.status === 500}
    <style>
        .announcement {
            border: 3px solid #dc3545;
        }
    </style>
{/if}

{#if $page.status === 200}
    <style>
        .announcement {
            border: 3px solid #198754;
        }
    </style>
{/if}