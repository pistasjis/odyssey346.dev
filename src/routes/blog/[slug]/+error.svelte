<script lang="ts">
	import { page } from "$app/stores";
	import ReadMoreButton from "$lib/components/ReadMoreButton.svelte";
</script>

<div
	class="flex flex-col items-center justify-left gap-4 mt-5 w-full max-w-xl container"
>
	<h1 class="text-4xl font-bold text-red-500">{$page.status}</h1>
	<p class="text-2xl">{$page.error?.message}</p>
	{#if $page.status === 404}
		<ReadMoreButton
			href="/"
			text="Want to go back home?"
		/>
	{/if}
</div>
