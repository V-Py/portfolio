<script>
    import { Svelvet, Node} from 'svelvet';
   
    let nodes = [
         {
          bgColor: 'red',
          label: 'Node 1',
          position: { x: 100, y: 100 },
          selectionColor:"rgb(255, 128, 200)"
         },
         {
          bgColor: 'green',
          label: 'Node 2',
          position: { x: 200, y: 200 }
         },
         {
          id: 1,
          bgColor: 'hsl(50, 20%, 50%)',
          label: 'Node 3',
          position: { x: 300, y: 300 }
         }
      ];
</script>
   
<div style="height:500px;width:500px;position:absolute;top:300px;left:300px;">
   <Svelvet theme="dark" edgeStyle="step" width={600} TD controls minimap>
     {#each nodes as node}
       <Node {...node} inputs={2} outputs={3}/>
     {/each}
     <Node rotation={-5} locked/>
   </Svelvet>
</div>
