<script lang="ts">
    import {fly} from 'svelte/transition';
</script>
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
            <span class="font-bold text-sm text-success">Interests :</span> <span class="greenpunk">Ecology</span>, <span class="greenpunk">Energy</span>, <span class="greenpunk">Plants</span>, <span class="retrowave-text">Sci-Fi</span>, <span class="retrowave-text">Retrowave</span>
        </p>
    </div>
</div>

<style>
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

    .greenpunk:hover{
        cursor:pointer;
        color: #fff;
        text-shadow:
        0 0 7px #fff,
        0 0 10px #36d399,
        0 0 21px #36d399,
        0 0 42px #36d399;
    }
</style>