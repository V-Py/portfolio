<script>
  	import { onMount } from 'svelte';
	import languages from '$lib/languages';
	import apis from '$lib/apis';
	import platforms from '$lib/platforms';
	import {scale} from 'svelte/transition';

	export let data;
	let show_screenshots = false;
	$: ({ title, fileName, ref, description, long_description, link, langs, apis_used, platforms_used} = data);

	let carousel; // for calling methods of the carousel instance
  
	const handleNextClick = () => {
		carousel.goToNext()
	}

    onMount(() => {
        console.log('onMount', data);
    });
</script>

<svelte:head>
	<title>Project - {title}</title>
</svelte:head>

<div class="w-full h-full flex flex-col bg-slate-800 text-white">
	<div class="top w-full flex items-center justify-around px-10" style:flex={2}>
		<div class="flex items-center justify-center">
			<img
				class="object-cover main-img"
				src={`/${fileName}`}
				width="100"
				alt={`picture of ${title}`}
				style:--tag={`project-${ref}`}
			/>

			<div class="flex flex-col items-center justify-center">
				<h1 class="text-4xl font-bold mt-4 ml-5" style:--tag="title-{ref}">{title}</h1>
				<div class="flex-1 ml-5 mt-3 flex items-center link text-white text-xs opacity-70 hover:opacity-90 active:opacity-100">
					<a target="_blank" href="{link}" class="flex">{link} <img alt="arrow-leave" class="ml-2" width="10" src="/up-right-from-square-thin.svg"/></a>
				</div>
			</div>
		</div>

		{#if langs.length > 0}
		<div class="flex flex-col items-center hover:bg-slate-700 py-5 px-8 rounded-md">
			<h2 class="text-xl font-bold mb-2">Technical skills used</h2>
			<div class="grid grid-cols-3 grid-flow-row w-48">
				{#each langs as lang_used}
					{@const language = languages.find(lang => lang.short === lang_used)}
					{#if language && language?.src}
					<img 
						in:scale
						class="icons"
						src={`/brands/${language.src}`}
						alt={language.short}
						title={language.name}
						width="30"
						style="margin:10px;"
					/>
					{/if}
				{/each}
			</div>
		</div>
		{/if}

		{#if apis_used.length > 0}
		<div class="flex flex-col items-center hover:bg-slate-700 py-5 px-8 rounded-md">
			<h2 class="text-xl font-bold mb-2">APIs used</h2>
			<div class="grid grid-cols-3 grid-flow-row w-48">
				{#each apis_used as api_used}
					{@const api = apis.find(lang => lang.short === api_used)}
					{#if api && api?.src}
						<img 
							in:scale
							class="icons"
							src={`/brands/${api.src}`}
							alt={api.short}
							title={api.name}
							width="30"
							style="margin:10px;"
						/>
					{/if}
				{/each}
			</div>
		</div>
		{/if}

		{#if platforms_used.length > 0}
		<div class="flex flex-col items-center hover:bg-slate-700 py-5 px-8 rounded-md">
			<h2 class="text-xl font-bold mb-2">Platforms used</h2>
			<div class="grid grid-cols-3 grid-flow-row w-48">
				{#each platforms_used as platform_used}
					{@const platform = platforms.find(platform => platform.short === platform_used)}
					{#if platform && platform?.src}
						<img 
							in:scale
							class="icons"
							src={`/brands/${platform.src}`}
							alt={platform.short}
							title={platform.name}
							width="30"
							style="margin:10px;"
						/>
					{/if}
				{/each}
			</div>
		</div>
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