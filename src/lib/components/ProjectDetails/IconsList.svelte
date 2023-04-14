<script lang="ts">
    import {scale, fade} from 'svelte/transition';
    export let items:any[];
    export let used:string[];
    export let title:string;
</script>

<div class="flex flex-col items-center hover:bg-slate-700 py-5 px-8 rounded-md">
    <h2 class="text-xl font-bold mb-2">{title}</h2>
    <div class="grid grid-cols-3 grid-flow-row w-48">
        {#each used as item_used, index_used}
            {@const delayTemp = index_used * 100}
            {@const item = items.find(item => item.short === item_used)}
            {#if item && item?.src}
            <div class="flex flex-col justify-center items-center" in:fade="{{delay:delayTemp}}">
                <img 
                    class="icons"
                    src={`/brands/${item.src}`}
                    alt={item.short}
                    title={item.name}
                    width="30"
                    style="margin:10px;"
                />
                <p class="text-xs text-center italic opacity-70">{item.name}</p>
            </div>
            {/if}
         
        {/each}
    </div>
</div>