<script>
    import "../app.css";
    import Header from '$lib/components/Header.svelte';
  //   import { preparePageTransition } from '$lib/page-transition';
	// preparePageTransition();
    
  </script>

<main class="h-full w-full bg-slate-800 relative">
  <Header />
  <slot />
</main>
