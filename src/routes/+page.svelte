<script lang="ts">
	import Hero from "$lib/components/Hero.svelte";
	import Bio from "$lib/components/Bio.svelte";
	import Announcement from "$lib/components/Announcement.svelte";

	import SvelteSeo from "svelte-seo";

	import type { PageData } from "./$types";
	export let data: PageData;
</script>

<svelte:head>
	<title>Pistasjis</title>
</svelte:head>

<SvelteSeo
	title="Pistasjis"
	description="15 year old developer and sysadmin"
	canonical="https://pistasjis.net"
	openGraph={{
		type: "article",
		url: `https://pistasjis.net`,
		title: `Pistasjis`,
		description: `15 year old developer and sysadmin`
	}}
/>

<div class="flex flex-col justify-center items-center something">
	<section class="second-background">
		<Hero />
	</section>
	<div class="content max-w-xl w-full">
		{#if data.kuma.incident}
			<Announcement data={data.kuma} />
		{/if}
		<Bio />
	</div>
</div>
