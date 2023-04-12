<script lang="ts">
    import {scale} from 'svelte/transition';

    let bool_show_details_project = false;
</script>
<svelte:head>
	<title>Valentin Py - Portfolio</title>
</svelte:head>

<div class="flex h-full w-full main-container justify-center items-center text-white">
    <div class="flex mx-56 h-full m-auto" style="flex:2;">
        <div class="left flex-1 flex flex-col p-16">
            <div class="hero">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                    <h1 class="text-5xl font-bold">Hello and welcome, I'm Valentin !</h1>
                    <p class="py-6 text-md text-justify text-gray-400 leading-7 columns-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                        nihil, eveniet aliquid culpa officia aut! 
                    </p>
                    <p class="py-6 text-sm text-justify text-gray-400 leading-7 columns-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                        tenetur error, harum nesciunt ipsum debitis quas aliquid.
                    </p>
                    <a href="/projects"><button class="btn btn-success">See my projects</button></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="right flex-1 flex-col p-20 items-center flex">
            <div class="avatar">
                    <div class="w-64 mask mask-squircle">
                    <img src="/me.jpg" alt="me" id="main-img"/>
                </div>
            </div>
            <p class="mt-5 italic text-sm">
                30 years old french web developer, currently working as a freelance.
            </p>
            <p class=" italic text-sm">
                Love to code and learn new things.
            </p>
            <p class=" italic text-sm">
                Hobbies : Sport, Nature, Books, Plants, Cooking
            </p>

            <div class="flex flex-col mt-6 bg-slate-600 rounded-xl p-10 justify-between">
                <a class="flex w-full p-3 hover:bg-slate-700 rounded-md" href="https://music.apple.com/fr/playlist/retrowave/pl.u-gxbllp4TM0XldM" target="_blank">
                    <img src="/paper-plane-regular.svg" alt="apple music logo" width="20" class="mr-2"/> valentin@gmail.com
                </a>
                <a class="flex w-full p-3 hover:bg-slate-700 rounded-md" href="https://music.apple.com/fr/playlist/retrowave/pl.u-gxbllp4TM0XldM" target="_blank">
                    <img src="/brands/github.svg" alt="apple music logo" width="20" class="mr-2"/> Find me on GitHub
                </a>
                <a class="flex w-full p-3 retrowave rounded-md" href="https://music.apple.com/fr/playlist/retrowave/pl.u-gxbllp4TM0XldM" target="_blank">
                    <img src="/brands/applemusic.svg" alt="apple music logo" width="20" class="mr-2"/> Retrowave lover ? Check my playlist
                    <!-- <h4 contenteditable spellcheck="false">open</h4> -->
                </a>
            </div>
        </div>
        
    </div>
</div>
<style>
    #main-img.goback{
        animation:goback 2s infinite;
    }

    .main-container{
        view-transition-name:main-container;
    }

    
    :root {
    /* Set neon color */
    --neon-text-color: #f40;
    --neon-border-color: #08f;
    }

    .retrowave:hover{
        background:#08f;
        box-shadow:0 0 2rem var(--neon-border-color);
    }


    @keyframes goback{
        0%{
            transform:translateX(0) translateY(0);
        }
        50%{
            transform:translateX(-10px) translateY(-10px);
        }
        100%{
            transform:translateX(0) translateY(0);
        }
    }
</style>

