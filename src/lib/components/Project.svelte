<script lang="ts">
    import languages from '$lib/languages';
    import apis from '$lib/apis';
    import platforms from '$lib/platforms';
    import {scale, fade} from 'svelte/transition';

    import {createEventDispatcher} from 'svelte';
    const dispatch = createEventDispatcher();
    export let project:{title:string, fileName:string, ref:string, description:string, link:string, apis_used:string[], langs:string[], platforms_used:string[]};

</script>
    <a in:fade class="project card bg-transparent hover:bg-slate-900 text-white hover:cursor-pointer min-h-56 w-full flex flex-col p-8 md:p-5 lg:p-7" href={`/projects/${project.ref}`}>
        <div class="flex-1 flex items-center">
            <div class="avatar">
                <div class="w-12" style="aspect-ratio:initial!important;">
                  <img class="project-img" src="/{project.fileName}" alt="calandrier" style:--tag="project-{project.ref}"/>
                </div>
              </div>
            <div class="project-title flex-1 flex items-center font-bold text-xl my-1 ml-2" style:--tag="title-{project.ref}">{project.title}</div>
 
        </div>
        <div class="flex-2 flex items-center opacity-70 text-sm my-1">
            {project.description}
        </div>
        
        {#if project.link != 'empty'}
            <div class="flex-1 flex items-center link text-white text-xs">{project.link}</div>
        {:else}
            <div class="flex-1 flex items-center text-white text-xs opacity-70 italic">
                App available only for the client but screenshots accessible
                <img src="/up-right-from-square-thin.svg" width="14" style="margin-left:5px;" alt="arrow click"/>
            </div>
        {/if}
        <div class="project-technos flex-1 flex items-center justify-end font-bold text-xl my-1 ml-2">
            {#each project.langs as lang_used}
                {@const language = languages.find(lang => lang.short === lang_used)}
                {#if language}
                    <img src="/brands/{language.src}" width="10" style="margin:5px;" alt="{language.short}"/>
                {/if}
            {/each}
            {#each project.apis_used as api_used}
                {@const api = apis.find(api => api.short === api_used)}
                {#if api}
                    <img src="/brands/{api.src}" width="10" style="margin:5px;" alt="{api.short}"/>
                {/if}
            {/each}
        </div>
    </a>
<style>
    img{
        view-transition-name:var(--tag);
    }
    
    .project-title{
        view-transition-name:var(--tag);
    }

    .project img:not(.project-img){
        filter:grayscale(100%);
    }

    .project:hover img{
        filter:grayscale(0%);
    }

    .project:hover .project-title{
        color: #fff;
        text-shadow:
        0 0 7px #fff,
        0 0 10px #36d399,
        0 0 21px #36d399;
    }
</style>