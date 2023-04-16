<script>
    import { onMount } from "svelte";
    import PhotoSwipeLightbox from 'photoswipe/lightbox';
    import 'photoswipe/style.css';

    export let ref = "";
    let galleryID = "mygalery";
    let images = [
        {largeURL: `/projects/${ref}/1.png`, thumbnailURL: `/projects/${ref}/1.png`},
        {largeURL: `/projects/${ref}/2.png`, thumbnailURL: `/projects/${ref}/2.png`},
        {largeURL: `/projects/${ref}/3.png`, thumbnailURL: `/projects/${ref}/3.png`},
        {largeURL: `/projects/${ref}/4.png`, thumbnailURL: `/projects/${ref}/4.png`},
    ];

    onMount(() => {


        let lightbox = new PhotoSwipeLightbox({
            gallery: '#' + galleryID,
            children: 'a',
            pswpModule: () => import('photoswipe'),
        });
        lightbox.init();
    })
</script>
    
<div class="pswp-gallery grid grid-cols-2 grid-rows-2 gap-5 p-10 mt-10" id={galleryID}>
    {#each images as image}
    <!-- data-pswp-height={image.height} -->
    <!-- data-pswp-width={image.width} -->

    <a href={image.largeURL} target="_blank" rel="noreferrer"><img src={image.thumbnailURL} alt="" width="300" /></a>
    {/each}
</div>

<style>
    img{
        border-radius:10px;
    }

    a:hover{
        opacity:0.8;
    }
</style>
    