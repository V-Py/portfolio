<script>
  	import { onMount } from 'svelte';
	import {scale} from 'svelte/transition';
	import languages from '$lib/languages';
	import apis from '$lib/apis';
	import platforms from '$lib/platforms';
	import Description from '$lib/components/ProjectDetails/Description.svelte';
	import Title from '$lib/components/ProjectDetails/Title.svelte';
	import IconsList from '$lib/components/ProjectDetails/IconsList.svelte';
	import ImgGallery from '$lib/components/ImgGallery.svelte';

	export let data;
	$: ({ title, fileName, ref, description, long_description, link, langs, apis_used, platforms_used, show_screenshots} = data);


    onMount(() => {
        console.log('onMount', data);
    });
</script>

<svelte:head>
	<title>Project - {title}</title>
</svelte:head>

<div class="w-full flex flex-col bg-slate-800 text-white pt-20">
	<div class="top w-full flex flex-col lg:flex-row items-center justify-around px-10" style:flex={2}>
		<Title {fileName} {title} {link} {ref}/>

		{#if langs.length > 0}
			<IconsList used={langs} items={languages} title="{`Technical skills used`}"/>
		{/if}

		{#if apis_used.length > 0}
			<IconsList used={apis_used} items={apis} title="{`APIs used`}"/>
		{/if}

		{#if platforms_used.length > 0}
			<IconsList used={platforms_used} items={platforms} title="{`Platforms used`}"/>
		{/if}
	</div>
	<div class="bot w-full flex flex-col sm:flex-row justify-center" style:flex={3}>
		<div class="flex flex-col flex-1 mt-0 p-5 sm:mt-6 sm:p-10">
			<h2 class="flex flex-col items-center text-base p-3 lg:p-5 lg:text-lg 2xl:p-7 2xl:text-xl font-bold">
				<p>{description}</p>
			</h2>
			<p class="text-justify text-gray-400 columns-1 text-xs leading-4 lg:leading-5 lg:px-5 lg:text-sm 2xl:px-7 2xl:text-base 2xl:leading-6">
				{@html long_description}
			</p>
		</div>
		<div class="flex flex-1 items-center justify-center">
			{#if show_screenshots}
				<ImgGallery {ref} />
			{:else}
				<div class="p-3">⚠️ No screenshots available at the moment.</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.main-img{
        view-transition-name:var(--tag);
    }

	.icons{
		/* filter:grayscale(100%); */
		/* filter:saturate(10%); */
	}

	.icons:hover{
		/* filter:grayscale(0%); */
		/* filter:saturate(100%); */

	}
	

	h1{
		view-transition-name:var(--tag);
	}

	.avatar:hover{
		cursor:pointer;
	}

	.avatar:hover div{
		transform:scale(1.1) !important;
	}

	
    .hourglass{
        /* transform:rotate(25deg); */
        animation: rotation 3s infinite ease-in-out;
        display:inline-block;
        /* background:orange; */
    }

    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(359deg);
        }
    }
</style>