<script lang="ts">
    export let title: string = "";
    export let content: string = "";
</script>

<div class="flex flex-col gap-2 p-4 mt-5 rounded-2xl border-3 border-solid border-[#0dcaf0]">
    <div class="flex flex-row gap-2 items-center">
        <div class="i-tabler-info-circle text-2xl" />
        <p class="text-2xl">{title}</p>
    </div>
    <p>{content}</p>
</div>