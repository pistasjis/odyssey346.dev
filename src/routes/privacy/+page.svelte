<script lang="ts">
	import Hero from "$lib/components/Hero.svelte";

	import Bio from "$lib/components/Bio.svelte";
</script>

<div class="flex flex-col justify-center items-center">
	<section class="second-background">
		<Hero />
	</section>
	<Bio noReadMore />
	<div class="flex flex-col items-left gap-4 mt-5 max-w-xl">
		<h2 class="text-2xl">Privacy Policy</h2>
		<p>
			pistasjis.net does not collect any personal data. However, there are
			cases where a service hosted on pistasjis.net might log IP address
			(Internet Protocol address) or User-Agent. I try my best to turn off
			logging here.
		</p>
		<p>
			However, I do log IPs and User-Agents when visiting a service that
			is not meant for the public's eyes (Cockpit dashboard, Portainer
			etc).
		</p>
		<p>
			Apps I've made like Fixdows do not send any telemetry or personal
			data back to me.
		</p>
	</div>
</div>
