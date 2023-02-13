<script lang="ts">
	import type { ActionData } from './$types';

    import Link from '$lib/components/Link.svelte';

    import SvelteSeo from 'svelte-seo';

	export let form: ActionData;
</script>

<svelte:head>
    <title>Contact | Odyssey346</title>
</svelte:head>

<SvelteSeo
    title="Contact | Odyssey346"
    description="How to contact Odyssey346"
    canonical="https://odyssey346.dev/contact"
    openGraph={{
        type: "article",
        url: `https://odyssey346.dev/contact`,
        title: `Contact | Odyssey346`,
        description: `How to contact Odyssey346`,
    }}
/>

<div class="flex flex-col justify-center items-center container">
    <div class="flex flex-col items-left">
        <h1 class="text-4xl font-bold bg-clip-text bg-gradient-to-r from-accent to-blue-500 text-transparent">Contact</h1>
        <p class="text-xl">Fill the form, and I will receive your message.</p>
        {#if form?.success}
            <div class="text-green-500 text-xl mt-5">Your message has been sent!</div>
        {/if}
        {#if form?.error}
            <div class="text-red-500 text-xl mt-5">An error occurred while sending your message.</div>
        {/if}
        <form class="flex flex-col items-left rounded-xl mt-5 gap-4 mb-5" method="POST">
            <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                class="border-2 transition-all border-solid bg-background p-2 rounded-xl"
            />
            <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                class="border-2 transition-all border-solid p-2 bg-background rounded-xl"
            />
            <textarea
                name="message"
                id="message"
                placeholder="Your message..."
                class="border-2 transition-all border-solid bg-background p-2 rounded-xl"
            />
            <button
                type="submit"
                class="border-solid rounded-full border-2 transition-all max-w-fit p-2 hover:bg-thirdbackground"
                >Submit</button
            >
        </form>
        <p class="break-all">If the form (for some reason) doesn't work, please shoot me an e-mail at <Link text="hi@odyssey346.dev" href="mailto:hi@odyssey346.dev" />.</p>
    </div>
</div>
