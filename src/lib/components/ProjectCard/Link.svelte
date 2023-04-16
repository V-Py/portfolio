<script lang="ts">
    export let link:string;
</script>

{#if link != 'empty'}
    <div class="flex-1 flex items-center link text-white text-xs">{link}</div>
    {:else}
    <div class="flex-1 flex items-center text-white text-xs opacity-70 italic">
        App available only for the client but screenshots may be accessible
        <img src="/up-right-from-square-thin.svg" width="14" style="margin-left:5px;" alt="arrow click"/>
    </div>
{/if}