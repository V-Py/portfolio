<script lang="ts">

    import {scale, fade} from 'svelte/transition';
    import Title from '$lib/components/ProjectCard/Title.svelte';
    import Description from '$lib/components/ProjectCard/Description.svelte';
    import Link from '$lib/components/ProjectCard/Link.svelte';
    import Details from '$lib/components/ProjectCard/Details.svelte';

    import {createEventDispatcher} from 'svelte';
    const dispatch = createEventDispatcher();
    export let project:{title:string, fileName:string, ref:string, description:string, link:string, apis_used:string[], langs:string[], platforms_used:string[]};

</script>
    <a in:fade class="project card bg-transparent hover:bg-slate-900 text-white hover:cursor-pointer min-h-56 w-full flex flex-col p-8 md:p-5 lg:p-7" href={`/projects/${project.ref}`}>
        <Title title={project.title} fileName={project.fileName} ref={project.ref}/>
        <Description description={project.description}/>
        <Link link={project.link}/>
        <Details langs={project.langs} apis_used={project.apis_used} />
    </a>
<style>

</style>