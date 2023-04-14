<script lang="ts">
    import MainGrid from '$lib/components/MainGrid.svelte';
    import {scale} from 'svelte/transition';

    let bool_show_details_project = false;
    function handleProjectClicked(e){
        bool_show_details_project = true;
    }
</script>
<svelte:head>
	<title>Valentin Py - Portfolio</title>
</svelte:head>

<div class="flex w-full pt-20 main-container">
    <div class="flex flex-col" style="flex:2;">
        <MainGrid on:projectClicked={handleProjectClicked}/>
    </div>
</div>
<style>
    .main-container{
        view-transition-name:main-container;
    }
</style>

