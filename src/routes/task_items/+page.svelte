<svelte:head>
	<title>Crud</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import { goto } from '$app/navigation';
import LibAuth from '$lib/LibAuth';
import HttpCommon from '$lib/HttpCommon';

/** @type {import('./$types').PageData} */
export let data: any;
console.log(data);
/**
 * start proc
 * @param
 *
 * @return
 */ 
 const startProc = async function () {
	try {
		const postItem = {
			userId: 0
		}		
		const json = await HttpCommon.server_post({}, "/project/get_list");
    console.log(json);  
		data.items = json.data;		
	} catch (e) {
      console.error(e);
    }	
}
console.log("#start: /test");
startProc();
</script>

<div class="container my-2">
	<h1>project</h1>
	<p>markdown diplay, OK</p>
	<hr />
	<a href={`/task_project/create`} class="btn btn-primary">Create
	</a>
  
	<hr />
	{#each data.items as item}
	<div>
		<h3>{item.name}</h3>
		<p>ID : {item.id}</p>
		<a href={`/task_project/${item.id}`} class="btn btn-outline-primary">Show
		</a>
		<hr />
	</div>
	{/each}	
</div>
<!-- 
		<a href={`/task_project/edit/${item.id}`} class="btn">[ Edit ]
		</a>					
-->