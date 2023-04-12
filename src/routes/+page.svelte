<script lang="ts">
    import {scale} from 'svelte/transition';

    let bool_show_details_project = false;
</script>
<svelte:head>
	<title>Valentin Py - Portfolio</title>
</svelte:head>

<div class="flex h-full w-full main-container justify-center items-center text-white">
    <div class="flex mx-56 h-full m-auto" style="flex:2;">
        <div class="left flex-1 flex flex-col p-20">
            <!-- <h1 class="p-10 bg-slate-900 font-bold rounded-md text-2xl">Hello I'm Valentin Py</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
                sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
                minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
                quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
                fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
                consequuntur! Commodi minima excepturi repudiandae velit hic maxime
                doloremque. Quaerat provident commodi consectetur veniam similique ad 
                earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
                fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
                suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
                modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
                totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
                quasi aliquam eligendi, placeat qui corporis!
            </p> -->
            <div class="hero">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                    <h1 class="text-5xl font-bold">Hello there</h1>
                    <p class="py-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
                        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                    </p>
                    <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="right flex-1 flex-col p-20 items-center flex">
            <div class="avatar">
                    <div class="w-64 mask mask-squircle">
                    <img src="/me.jpg" alt="me"/>
                </div>
            </div>
        </div>
        
    </div>
</div>
<style>
    .main-container{
        view-transition-name:main-container;
    }
</style>

