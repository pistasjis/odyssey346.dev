<!-- TODO: add navbar menu button for mobile users. -->
<script lang="ts">
    import ReadMoreButton from "./ReadMoreButton.svelte";
    import { page } from "$app/stores";
    import "$lib/styles/navbar.css";

    let YValue = 0;
    let innerWidth = 0;
</script>

<nav class="flex justify-between border-solid p-2 border-gray-600 bg-secondbackground navbar z-50">
    <div class="flex flex-row items-center justify-center">
        <a href="/" class="odyssey">
            <h1 class="text-2xl">Pistasj</h1>
        </a>
    </div>
    <div class="navlinks flex gap-2">
        <a href="/about" class="underline-offset-5 hover:opacity-75 transition-all text-xl " class:underline={$page.url.pathname === "/about"}>About</a>
        <a href="/projects" class="underline-offset-5 hover:opacity-75 transition-all text-xl" class:underline={$page.url.pathname === "/projects"}>Projects</a>
        <a href="/blog" class="underline-offset-5 hover:opacity-75 transition-all text-xl" class:underline={$page.url.pathname === "/blog"}>Blog</a>
        <a href="/contact" class="underline-offset-5 hover:opacity-75 transition-all text-xl" class:underline={$page.url.pathname === "/contact"}>Contact</a>
        <!--
        <a href="/about" class="navbutton border-solid rounded-full border-2 transition-all max-w-fit p-2 hover:border-accent" class:border-accent={$page.url.pathname === "/about"}>About</a>
        <a href="/projects" class="navbutton border-solid rounded-full border-2 transition-all max-w-fit p-2 hover:border-accent" class:border-accent={$page.url.pathname === "/projects"}>Projects</a>
        <a href="/blog" class="navbutton border-solid rounded-full border-2 transition-all max-w-fit p-2 hover:border-accent" class:border-accent={$page.url.pathname === "/blog"}>Blog</a>
        <a href="/contact" class="navbutton border-solid rounded-full border-2 transition-all max-w-fit p-2 hover:border-accent" class:border-accent={$page.url.pathname === "/contact"}>Contact</a>
        -->
    </div>
</nav>