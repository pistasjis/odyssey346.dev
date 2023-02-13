<!-- TODO: add navbar menu button for mobile users. -->
<script lang="ts">
    import ReadMoreButton from "./ReadMoreButton.svelte";
    import { page } from "$app/stores";
    import "$lib/styles/navbar.css";

    let YValue = 0;
    let innerWidth = 0;
</script>

<nav class="flex justify-between border-solid p-2 border-gray-600 bg-background navbar">
    <slot /> <!-- slot for nav progress -->
    <div class="flex flex-row items-center justify-center">
        <a href="/" class="odyssey">
            <h1 class="text-2xl"><span class="bg-gradient-to-r from-accent to-blue-500 text-transparent bg-clip-text">Odyssey</span>346</h1>
        </a>
    </div>
    <div class="navlinks flex items-center gap-2">
        <a href="/about" class="navbutton border-solid rounded-full border-2 transition-all max-w-fit p-2 hover:bg-thirdbackground" class:bg-thirdbackground={$page.url.pathname === "/about"}>About</a>
        <a href="/projects" class="navbutton border-solid rounded-full border-2 transition-all max-w-fit p-2 hover:bg-thirdbackground" class:bg-thirdbackground={$page.url.pathname === "/projects"}>Projects</a>
        <a href="/blog" class="navbutton border-solid rounded-full border-2 transition-all max-w-fit p-2 hover:bg-thirdbackground" class:bg-thirdbackground={$page.url.pathname === "/blog"}>Blog</a>
        <a href="/contact" class="navbutton border-solid rounded-full border-2 transition-all max-w-fit p-2 hover:bg-thirdbackground" class:bg-thirdbackground={$page.url.pathname === "/contact"}>Contact</a>
    </div>
</nav>

{#if YValue >= 100 && innerWidth > 768}
    <style>
        .navbar {
            border-bottom: 2px solid var(--third-background);
        }
    </style>
{/if}

<svelte:window bind:scrollY={YValue} bind:innerWidth={innerWidth} />