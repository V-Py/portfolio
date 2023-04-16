<script lang="ts">
    import {scale} from 'svelte/transition';
</script>

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

<style>
    .greenpunk{
        color: #fff;
        text-shadow:
        0 0 7px #fff,
        0 0 10px #36d399,
        0 0 21px #36d399,
        0 0 42px #36d399;
    }
</style>