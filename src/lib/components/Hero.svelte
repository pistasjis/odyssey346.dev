<script lang="ts">
	import { fade } from "svelte/transition";
</script>

<div
	class="flex flex-col items-left justify-left gap-4 mt-5 mb-5 w-full max-w-xl"
>
	<h1 class="text-3xl font-bold">
		Hello, I'm <span class="underline underline-offset-9">Pistasj</span>!
	</h1>
	<p>I like messing around with computers.</p>
	<div class="flex flex-row gap-4 text-3xl flex-wrap">
		<div
			class="i-simple-icons:git hover:text-[#F05032] transition-all"
			title="Git"
		/>
		<div
			class="i-simple-icons:svelte hover:text-[#FF3E00] transition-all"
			title="Svelte"
		/>
		<div
			class="i-simple-icons:blazor hover:text-[#512BD4] transition-all"
			title="Blazor"
		/>
		<div
			class="i-simple-icons:directus hover:text-[#8866ff] transition-all"
			title="Directus"
		/>
		<div
			class="i-simple-icons:go hover:text-[#00ADD8] transition-all"
			title="Go"
		/>
		<div
			class="i-simple-icons:docker hover:text-[#2496ED] transition-all"
			title="Docker"
		/>
		<div
			class="i-file-icons:caddy hover:text-[#22b638] transition-all"
			title="Caddy"
		/>
		<div
			class="i-simple-icons:hugo hover:text-[#FF4088] transition-all"
			title="Hugo"
		/>
		<div
			class="i-simple-icons:unocss hover:text-[#333333] transition-all"
			title="UnoCSS"
		/>
	</div>
</div>
