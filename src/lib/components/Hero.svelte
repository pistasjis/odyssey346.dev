<script lang="ts">
    import { fade } from "svelte/transition";
</script>

<div class="flex flex-col items-left justify-left gap-4 mt-5 w-full max-w-xl">
    <h1 class="text-3xl font-bold">Hi, I'm <span class="bg-gradient-to-r from-accent to-blue-500 text-transparent bg-clip-text">Odyssey</span>346!</h1>
    <p>I like developing websites and hosting things on my VPS(es).</p>
    <div class="flex flex-row gap-4 text-3xl">
        <div class="i-simple-icons:git hover:text-[#F05032] transition-all" title="Git"></div>
        <div class="i-simple-icons:svelte hover:text-[#FF3E00] transition-all" title="Svelte"></div>
        <div class="i-simple-icons:directus hover:text-[#8866ff] transition-all" title="Directus"></div>
        <div class="i-simple-icons:go hover:text-[#00ADD8] transition-all" title="Go"></div>
        <div class="i-simple-icons:docker hover:text-[#2496ED] transition-all" title="Docker"></div>
        <div class="i-file-icons:caddy hover:text-[#22b638] transition-all" title="Caddy"></div>
        <div class="i-simple-icons:hugo hover:text-[#FF4088] transition-all" title="Hugo"></div>
        <div class="i-simple-icons:unocss hover:text-[#333333] transition-all" title="UnoCSS"></div>
    </div>
</div>