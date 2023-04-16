<script lang="ts">
    export let ref:string;
    export let title:string;
    export let fileName:string;
</script>

<div class="flex-1 flex items-center">
    <div class="avatar">
        <div class="w-12" style="aspect-ratio:initial!important;">
          <img class="project-img" src="/{fileName}" alt="calandrier" style:--tag="project-{ref}"/>
        </div>
      </div>
    <div class="project-title flex-1 flex items-center font-bold text-xl my-1 ml-2" style:--tag="title-{ref}">{title}</div>
</div>

<style>
    img{
        view-transition-name:var(--tag);
    }

    .project-title{
        view-transition-name:var(--tag);
    }
</style>