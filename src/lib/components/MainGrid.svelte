<script lang="ts">
    import ProjectCard from '$lib/components/ProjectCard.svelte';
    import projects from '$lib/projects';

</script>

<div class="grid bg-slate-800 grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-3 p-1 w-full h-full overflow-hidden">
    {#each projects as project}
        <ProjectCard {project} on:projectClicked/>
    {/each}
</div>

<style>
    /* .grid{
        view-transition-name:grid;
    } */
</style>