<!-- TODO: add navbar menu button for mobile users. -->
<script lang="ts">
    import ReadMoreButton from "./ReadMoreButton.svelte";
    import { page } from "$app/stores";
    import "$lib/styles/navbar.css";

    let YValue = 0;
    let innerWidth = 0;
</script>

<nav class="flex justify-between border-solid p-2 border-gray-600 bg-background navbar z-50">
    <slot /> <!-- slot for nav progress -->
    <div class="flex flex-row items-center justify-center">
        <a href="/" class="odyssey">
            <h1 class="text-2xl"><span class="bg-gradient-to-r from-accent to-blue-300 text-transparent bg-clip-text">Odyssey</span>346</h1>
        </a>
    </div>
    <div class="navlinks flex gap-2">
        <a href="/about" class="underline-offset-5 hover:opacity-75 transition-all text-xl " class:text-accent={$page.url.pathname === "/about"}>About</a>
        <a href="/projects" class="underline-offset-5 hover:opacity-75 transition-all text-xl" class:text-accent={$page.url.pathname === "/projects"}>Projects</a>
        <a href="/blog" class="underline-offset-5 hover:opacity-75 transition-all text-xl" class:text-accent={$page.url.pathname === "/blog"}>Blog</a>
        <a href="/contact" class="underline-offset-5 hover:opacity-75 transition-all text-xl" class:text-accent={$page.url.pathname === "/contact"}>Contact</a>
        <!--
        <a href="/about" class="navbutton border-solid rounded-full border-2 transition-all max-w-fit p-2 hover:border-accent" class:border-accent={$page.url.pathname === "/about"}>About</a>
        <a href="/projects" class="navbutton border-solid rounded-full border-2 transition-all max-w-fit p-2 hover:border-accent" class:border-accent={$page.url.pathname === "/projects"}>Projects</a>
        <a href="/blog" class="navbutton border-solid rounded-full border-2 transition-all max-w-fit p-2 hover:border-accent" class:border-accent={$page.url.pathname === "/blog"}>Blog</a>
        <a href="/contact" class="navbutton border-solid rounded-full border-2 transition-all max-w-fit p-2 hover:border-accent" class:border-accent={$page.url.pathname === "/contact"}>Contact</a>
        -->
    </div>
</nav>

{#if innerWidth <= 768}
<div class="pb-2">
    <!-- this is just a separator -->
</div>
{/if}

{#if YValue >= 100 && innerWidth > 768 || innerWidth <= 768}
    <style>
        .navbar {
            border-bottom: 2px solid var(--third-background);
        }
    </style>
{/if}

<svelte:window bind:scrollY={YValue} bind:innerWidth={innerWidth} />