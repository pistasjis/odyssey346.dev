<script lang="ts">
	import Link from "$lib/components/Link.svelte";

	import SvelteSeo from "svelte-seo";
</script>

<svelte:head>
	<title>Contact | Pistasjis</title>
</svelte:head>

<SvelteSeo
	title="Contact | Pistasjis"
	description="How to contact Pistasj"
	canonical="https://pistasjis.net/contact"
	openGraph={{
		type: "article",
		url: `https://pistasjis.net/contact`,
		title: `Contact | Pistasjis`,
		description: `How to contact Pistasj`
	}}
/>

<div class="flex flex-col justify-center items-center">
	<section class="second-background">
		<div class="flex flex-col items-left justify-left mt-5 w-full max-w-xl">
			<h1 class="text-4xl font-bold">Contact</h1>
			<p class="text-xl">Various contact methods</p>
		</div>
	</section>
	<div class="content">
		<div class="max-w-xl w-full">
			<h2 class="text-3xl font-bold mt-5">E-mail</h2>
			<p class="my-2">
				You can send me an e-mail at <Link
					text="hi[at symbol]pistasjis.net"
					href="mailto:hi@pistasjis.net"
				/>. <span class="font-bold">NB!</span> This e-mail address forwards
				to another email hosted elsewhere, so you'll get a response from
				a different e-mail address. Because of this I can't provide a PGP
				key on this site.
			</p>
		</div>
	</div>
</div>
