<!-- TODO: add navbar menu button for mobile users. -->
<script lang="ts">
	import ReadMoreButton from "./ReadMoreButton.svelte";
	import { page } from "$app/stores";
	import "$lib/styles/navbar.css";
	import { slide } from "svelte/transition";

	let YValue = 0;
	let lastYValue = 0;
	let innerWidth = 0;

	let nav: HTMLElement;

	const handleScroll = () => {
		if (YValue > lastYValue) {
			nav.style.top = "-80px";
		} else {
			nav.style.top = "0px";
		}

		lastYValue = YValue;
	};
</script>

<nav
	class="flex justify-between p-2 bg-secondbackground navbar z-50 items-center"
	bind:this={nav}
>
	<div class="flex flex-row items-center justify-center">
		<a
			href="/"
			class="odyssey"
		>
			<h1 class="text-2xl">Pistasj</h1>
		</a>
	</div>
	<div class="navlinks flex gap-2">
		<a
			href="/about"
			class="underline-offset-5 hover:opacity-75 transition-all text-xl "
			class:underline={$page.url.pathname === "/about"}>About</a
		>
		<a
			href="/projects"
			class="underline-offset-5 hover:opacity-75 transition-all text-xl"
			class:underline={$page.url.pathname === "/projects"}>Projects</a
		>
		<a
			href="/blog"
			class="underline-offset-5 hover:opacity-75 transition-all text-xl"
			class:underline={$page.url.pathname === "/blog"}>Blog</a
		>
		<a
			href="/contact"
			class="underline-offset-5 hover:opacity-75 transition-all text-xl"
			class:underline={$page.url.pathname === "/contact"}>Contact</a
		>
	</div>
</nav>

<svelte:window
	bind:scrollY={YValue}
	bind:innerWidth
	on:scroll={handleScroll}
/>

{#if YValue >= 500 && innerWidth >= 768}
	<style>
		.navbar {
			transition: top 0.2s ease-in-out;
			background: var(--fourth-background);
			backdrop-filter: blur(15px);
			border-bottom: 1px solid rgba(255, 255, 255, 0.1);
			position: sticky;
		}
	</style>
{/if}
