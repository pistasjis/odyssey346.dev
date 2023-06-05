<script>
	import { onDestroy, onMount } from "svelte";
	import { tweened } from "svelte/motion";
	import { cubicOut } from "svelte/easing";
	import { navigating } from "$app/stores";
	import { fade } from "svelte/transition";
	const progress = tweened(0, {
		duration: 3500,
		easing: cubicOut
	});
	const unsubscribe = navigating.subscribe(
		(value) => value === null && progress.set(1, { duration: 1000 })
	);
	onMount(() => {
		progress.set(0.7);
	});
	onDestroy(() => {
		unsubscribe();
	});
</script>

<div
	class="fixed inset-0 h-3px"
	out:fade={{ delay: 500 }}
>
	<div
		class="bg-gradient-to-r from-accent to-blue-300 h-full"
		style="width: {$progress * 100}%"
	/>
</div>
