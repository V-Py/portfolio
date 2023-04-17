<script lang="ts">
    import Contact from '$lib/components/AboutMe/Contact.svelte';
    import Avatar from '$lib/components/AboutMe/Avatar.svelte';
    import Content from '$lib/components/AboutMe/Content.svelte';
</script>
<svelte:head>
	<title>Valentin Py - Portfolio</title>
</svelte:head>

<div class="flex h-full w-full main-container justify-center items-center text-white overflow-auto">
    <div class="flex flex-col-reverse pt-20 w-full md:flex-row md:mx-20 h-full m-auto xl:mx-40 2xl:mx-48 ">
        <div class="left h-full flex-1 flex flex-col p-2 md:p-5 2xl:p-10">
            <Content />
        </div>
        <div class="right sm:flex-1 flex-col items-center flex p-2 md:p-8 2xl:p-12">
            <Avatar />
            <Contact />
        </div>
        
    </div>
</div>
<style>

    /* .main-container{
        view-transition-name:main-container;
    } */
</style>

