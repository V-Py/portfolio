<script lang="ts">
    import {scale,fly} from 'svelte/transition';

    let bool_show_details_project = false;
</script>
<svelte:head>
	<title>Valentin Py - Portfolio</title>
</svelte:head>

<div class="flex h-full w-full main-container justify-center items-center text-white ">
    <div class="flex flex-col-reverse pt-20 w-full md:flex-row md:mx-20 h-full m-auto xl:mx-40 2xl:mx-48 ">
        <div class="left overflow-hidden  flex-1 flex flex-col p-2 md:p-5 2xl:p-10">
            <div class="hero">
                <div class="hero-content pt-1 text-center">
                    <div class="max-w-md">
                    <h1 class="font-bold text-xl md:text-4xl 2xl:text-5xl" in:scale>Hello and welcome, I'm Valentin !</h1>
                    <p class="text-justify text-gray-400 sm:columns-2 py-2 text-xs leading-4 md:text-sm md:py-4 md:leading-6 2xl:py-5 2xl:text-base 2xl:leading-7">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                        nihil, eveniet aliquid culpa officia aut! 
                    </p>
                    <p class="text-justify text-gray-400 columns-1 py-2 text-xs leading-4 md:leading-5 md:text-sm md:py-4 2xl:py-5 2xl:text-sm 2xl:leading-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                        tenetur error, harum nesciunt ipsum debitis quas aliquid.
                    </p>
                    <a href="/projects" class=""><button class="btn btn-success">See my projects</button></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="right sm:flex-1 flex-col items-center flex p-2 md:p-8 2xl:p-12">
            <div class="flex sm:flex-col items-center mb-3 md:mb-0">
                <div class="avatar" in:fly="{{y:500, duration:500}}">
                    <div class="mask mask-squircle w-24 sm:w-36 md:w-56 2xl:w-64">
                        <img src="/me.jpg" alt="me" id="main-img"/>
                    </div>
                </div>
                <div class="flex flex-col items-center text-center">
                    <p class="mt-5 italic text-xs md:text-sm">
                        30 years old french web developer, currently working as a freelance.
                    </p>
                    <p class=" italic text-xs md:text-sm">
                        Love to code and learn new things.
                    </p>
                    <p class=" italic text-xs md:text-sm">
                        Hobbies : Sport, Nature, Books, Plants, Cooking
                    </p>
                </div>
            </div>
            <div class="flex flex-col bg-slate-600 rounded-xl justify-between mt-1 sm:mt-2 p-2 text-xs md:p-5 md:text-sm 2xl:p-10 2xl:text-lg md:mt-6">
                <a class="flex w-full p-1 sm:p-2 md:p-3 hover:bg-slate-700 rounded-md" href="mailto:valentin.pyb@gmail.com" target="_blank">
                    <img src="/paper-plane-regular.svg" alt="apple music logo" width="20" class="mr-2"/> valentin.pyb@gmail.com
                </a>
                <a class="flex w-full p-1 sm:p-2 md:p-3 hover:bg-slate-700 rounded-md" href="https://github.com/V-Py" target="_blank">
                    <img src="/brands/github.svg" alt="apple music logo" width="20" class="mr-2"/> Find me on GitHub
                </a>
                <a class="flex w-full p-1 sm:p-2 md:p-3 retrowave rounded-md" href="https://music.apple.com/fr/playlist/retrowave/pl.u-gxbllp4TM0XldM" target="_blank">
                    <img src="/brands/applemusic.svg" alt="apple music logo" width="20" class="mr-2"/> Retrowave lover ? Check my playlist
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

    

    .retrowave:hover{
        background:#08f;
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

