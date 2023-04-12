<script>
  	import { onMount } from 'svelte';
	import {scale} from 'svelte/transition';
	import languages from '$lib/languages';
	import apis from '$lib/apis';
	import platforms from '$lib/platforms';
	import Description from '$lib/components/ProjectDetails/Description.svelte';
	import Title from '$lib/components/ProjectDetails/Title.svelte';
	import IconsList from '$lib/components/ProjectDetails/IconsList.svelte';

	export let data;
	let show_screenshots = false;
	$: ({ title, fileName, ref, description, long_description, link, langs, apis_used, platforms_used} = data);


    onMount(() => {
        console.log('onMount', data);
    });
</script>

<svelte:head>
	<title>Project - {title}</title>
</svelte:head>

<div class="w-full h-full flex flex-col bg-slate-800 text-white">
	<div class="top w-full flex items-center justify-around px-10" style:flex={2}>
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
	<div class="bot w-full flex justify-center" style:flex={3}>
		<div class="flex flex-1 mt-10">
			<div class="flex flex-col items-center p-10">
				<p>{long_description}</p>
			</div>
		</div>
		<div class="flex flex-1 items-center justify-center">
			{#if show_screenshots}
			<div class="avatar ml-20">
				<div class="w-9/12 rounded-md" style="aspect-ratio:initial;">
					<img src="/projects/{ref}/1.png" class="w-6/12" alt="first img project" />
				</div>
			</div>
			{:else}
				<div>Screenshots incoming ⌛</div>
			{/if}
		</div>
	</div>
</div>

<div class="absolute w-56 h-56 top-0 left-0 bg-orange opacity-40 z-50">

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
</style>