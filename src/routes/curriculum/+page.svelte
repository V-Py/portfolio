<script>
    import languages from '$lib/languages';
    import {scale} from 'svelte/transition';
</script>

<div in:scale class="flex items-center justify-center w-full h-full">
    <div class="flex flex-col justify-center items-center text-white w-10/12 lg:w-4/12 m-auto p-20 bg-slate-600 rounded-md">
        <div>Work in progress <span class="hourglass">⌛</span><br></div>
        <div>In the meantime, you can download it : <a href="Resume_Valentin_Py.pdf" target="_blank" class="link">My Resume </a></div>
    </div>
</div>
<style>
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