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
                    <h1 class="font-bold text-xl md:text-4xl 2xl:text-5xl" in:scale>Hi, I'm <span class="greenpunk">Valentin</span>.</h1>
                    <p class="text-justify text-gray-400 py-2 text-xs leading-4 md:text-sm md:py-4 md:leading-6 2xl:py-5 2xl:text-base 2xl:leading-7">
                        I'm a freelance web developer from Valence, France. I'm 30 years old and I've been working as dev for about <span class="text-xl font-bold text-success">5</span> years!
                        My main toolbox contains HTML, CSS, PHP, MYSQL, JavaScript and TypeScript. Constantly eager to learn, my focus right now is on Svelte, SvelteKit and TailwindCSS.
                        I created a Sass available online named <a href="https://app.calandrier.com" target="_blank" class="link text-success">calANdrier</a> which is an annual calendar.
                    </p>
                    <p class="text-justify text-gray-400 columns-1 py-2 text-xs leading-4 md:leading-5 md:text-sm md:py-4 2xl:py-4 2xl:text-sm 2xl:leading-6">
                        As as self-taught dev that re-skilled from a energy specialist formation role (degrees in science and economy) into web development, I found the open source side of the web dev community to be very welcoming and helpful.    
                        I've been a maintainer of a few projects, and hope to be able to contribute more in the future.

                        <br><span class="h4 text-base underline underline-offset-4 text-success">Sectors I have worked in:</span>
                        As a web developer I have 4 years of experience working for small and medium companies in different sectors such as Food Production (aquaponics), Thermal & Geothermal (design offices), Sport (federation) and more.
                        My main activity is centered around software development for professionals using an ERP (Dolibarr) to manage their business.
                        
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
                        30 years old french web developer, love to code, read things and learn.
                    </p>
                    <p class=" italic text-xs md:text-sm">
                        <span class="font-bold text-sm text-success">Hobbies :</span> Sport, Nature, Books, Gardening, Cooking, Music
                    </p>
                    <p class=" italic text-xs md:text-sm">
                        <span class="font-bold text-sm text-success">Interests :</span> <span class="greenpunk-text">Ecology</span>, <span class="greenpunk-text">Energy</span>, <span class="greenpunk-text">Plants</span>, <span class="retrowave-text">Sci-Fi</span>, <span class="retrowave-text">Retrowave</span>
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

    .retrowave-text:hover{
        cursor:pointer;
        color: #fff;
        text-shadow:
        0 0 7px #fff,
        0 0 10px #08f,
        0 0 21px #08f,
        0 0 42px #08f,
        0 0 82px #08f,
        0 0 92px #08f,
        0 0 102px #08f,
        0 0 151px #08f;
    }

    .greenpunk-text:hover, .greenpunk{
        cursor:pointer;
        color: #fff;
        text-shadow:
        0 0 7px #fff,
        0 0 10px #36d399,
        0 0 21px #36d399,
        0 0 42px #36d399;
    }

    .retrowave:hover{
        /* background:#08f; */
        box-shadow:
        0 0 8px #fff,
        inset 0 0 8px #fff,
        0 0 16px #08f,
        inset 0 0 16px #08f,
        0 0 32px #08f,
        inset 0 0 32px #08f;
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

