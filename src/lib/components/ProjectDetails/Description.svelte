<script lang="ts">
    export let fileName:string;
    export let title:string;
    export let ref:string;
    export let link:string;
</script>
<div class="flex items-center justify-center">
    <img
        class="object-cover main-img"
        src={`/${fileName}`}
        width="100"
        alt={`picture of ${title}`}
        style:--tag={`project-${ref}`}
    />

    <div class="flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold mt-4 ml-5" style:--tag="title-{ref}">{title}</h1>
        {#if link != "empty"}
            <div class="flex-1 ml-5 mt-3 flex items-center link text-white text-xs opacity-70 hover:opacity-90 active:opacity-100">
                <a target="_blank" href="{link}" class="flex">{link} <img alt="arrow-leave" class="ml-2" width="10" src="/up-right-from-square-thin.svg"/></a>
            </div>
        {/if}
    </div>
</div>