<script lang="ts">
    export let src:string = '';
    export let color = '#fff';

    $: isSvg = !!src.endsWith(".svg");                             // we use $: because you may dynamically change the src so the component needs to be reactive. if you are sure that it won't be changed it will be great to use instead `const`
    $: svgRoute = isSvg ? src.replace(".svg", ".svg?raw") : null;  // you can also do `${src}?raw`
  </script>
  
  {isSvg}
  {svgRoute}