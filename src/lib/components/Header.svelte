<script lang="ts">
  import {page} from '$app/stores';

  import {onMount} from 'svelte';

  onMount(()=>{
    console.log('PAGE', $page);
  })
</script>

<nav class="navbar bg-slate-900 text-white w-full flex">
    <label class="btn btn-ghost btn-circle avatar" for="main-img">
        <div class="w-10 rounded-full">
          {#if $page.url.pathname === '/' || $page.url.pathname === '/projects'}
            <a href="/"><img src="/me.jpg" alt="me" id="main-img"/></a>
          {:else}
            <a href="/projects"><img src="/arrow-left-light.svg" alt="return" width="30" id="main-img"/></a>
          {/if}
        </div>
      </label>
    <div>
    </div>
    <div>
      <ul class="menu menu-horizontal px-1">
        <li><a href="/projects" class="text-xl font-bold main-text">Projects</a></li>
        <li><a href="/curriculum">Curriculum</a></li>
        <!-- <li><a href="/aboutme">About me</a></li> -->
      </ul>
    </div>
    <!-- <div class="absolute right-10">
        <button>LANG</button>
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
</style>