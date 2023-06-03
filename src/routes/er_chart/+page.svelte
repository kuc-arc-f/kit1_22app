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
			userId: LibAuth.getUserId(),
		}		
		const json = await HttpCommon.server_post(postItem, "/er_chart/get_list");
console.log(json);  
		data.items = json.data;		
	} catch (e) {
      console.error(e);
    }	
}
console.log("#start: /test");
startProc();
//
const nextPage = function(id) {
	console.log("id= ",id);
	location.href = `/er_chart/${id}`;
} 
</script>

<div class="container my-2">
	<h1>ErChart</h1>
	<p>mermaid.js display possible.</p>
	<hr />
	<a href={`/er_chart/create`} class="btn btn-primary">Create
	</a>
  
	<hr />
	{#each data.items as item}
	<div>
		<h3>{item.title}</h3>
		<p>ID : {item.id}</p>
		<button on:click={nextPage(item.id)} class="btn btn-outline-primary" 
		>Show</button>					
		<a href={`/er_chart/edit/${item.id}`} class="btn">[ Edit ]
		</a>
		<hr />
	</div>
	{/each}	
</div>
<!-- 
		<a href={`/er_chart/${item.id}`} class="btn btn-outline-primary">Show
		</a>
	
-->