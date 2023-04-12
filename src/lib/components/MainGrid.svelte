<script lang="ts">
    import Project from '$lib/components/Project.svelte';
    import projects from '$lib/projects';

</script>

<div class="grid bg-slate-800 grid grid-cols-3 grid-rows-2 gap-3 p-1 w-full h-full">
    {#each projects as project}
        <Project {project} on:projectClicked/>
    {/each}
</div>

<style>
    .grid{
        view-transition-name:grid;
    }
</style>