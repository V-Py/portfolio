<script lang="ts">
  import {page} from '$app/stores';
  import {fly} from 'svelte/transition';
</script>

<nav class="navbar bg-slate-900 text-white w-full flex h-20 absolute top-0">
    <label class="btn btn-ghost btn-circle avatar" for="main-img">
      {#if $page.url.pathname === '/' }
        <div in:fly="{{x:100, duration:200, delay:300}}" class="w-10 rounded-full">
          <div class="bg-gray-500 block w-full h-full"></div>
        </div>
      {:else}
        <div out:fly="{{y:-200, duration:300}}" class="w-10 rounded-full">
          <a href="/"><img src="/me.jpg" alt="me" id="main-img"/></a>
        </div>
      {/if}


      </label>
    <div>
    </div>
    <div>
      <ul class="menu menu-horizontal px-1">
        <li ><a href="/projects" class="text-xl active:bg-slate-700 font-bold main-text">Projects</a></li>
        <li><a href="/curriculum" class="active:bg-slate-700">Curriculum</a></li>
      </ul>
    </div>
    <!-- <div class="absolute right-10">
        <button></button>
        <button>DARK MODE</button>
    </div> -->
</nav>
<style>
  nav{
    view-transition-name:main-header;
  }

  .main-text{
    view-transition-name:main-header-text;
  } 

  #main-img{
    view-transition-name:main-header-img;
  }
</style>