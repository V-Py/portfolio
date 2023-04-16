<script lang="ts">
    import languages from '$lib/languages';
    import apis from '$lib/apis';

    export let langs:string[];
    export let apis_used:string[];

</script>

<div class="project-technos flex-1 flex items-center justify-end font-bold text-xl my-1 ml-2">
    {#each langs as lang_used}
        {@const language = languages.find(lang => lang.short === lang_used)}
        {#if language}<img src="/brands/{language.src}" width="10" style="margin:5px;" alt="{language.short}"/>{/if}
    {/each}
    {#each apis_used as api_used}
        {@const api = apis.find(api => api.short === api_used)}
        {#if api}<img src="/brands/{api.src}" width="10" style="margin:5px;" alt="{api.short}"/>{/if}
    {/each}
</div>