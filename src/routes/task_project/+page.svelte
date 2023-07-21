<svelte:head>
	<title>Crud</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import { goto } from '$app/navigation';
import LibAuth from '$lib/LibAuth';
import HttpCommon from '$lib/HttpCommon';
import CrudIndex from './CrudIndex';

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
/**
*
* @param
*
* @return
*/
const clearSearch = async function() {
    const seachKey = (<HTMLInputElement>document.querySelector("#searchKey"));
    seachKey.value = "";
    startProc();
//console.log(items);
}
//
const nextPage = function(path: string) {
    location.href = path
}
/**
*
* @param
*
* @return
*/
const search = async function() {
    console.log("search");
    data.items = await CrudIndex.search();
//console.log(data.items);
}
</script>

<div class="container my-2">
    <div class="row">
        <div class="col-md-6"><h1>project</h1></div>
        <div class="col-md-6 text-end">
            <a href={`/task_project/create`} class="btn btn-primary">Create
            </a>
        </div>
    </div>
    <hr class="my-1" />
    <div class="row">
    <div class="col-md-12 text-end">
        <button class="btn btn-sm btn-outline-primary" on:click={clearSearch}
        >Clear</button>
        <span class="search_key_wrap">
        <input type="text" size="24" class="mx-2" name="searchKey" id="searchKey" 
        placeholder="Title search">
        </span>
        <button class="btn btn-sm btn-outline-primary" on:click={search}>Search</button>      
    </div>
    </div>	
    <hr class="my-2" />
    {#each data.items as item}
    <div class="row">
        <div class="col-md-6">
            <a href={`/task_project/${item.id}`} ><h3 class="my-1">{item.name}</h3>
            </a>		
            <span>ID : {item.id}</span>
        </div>
        <div class="col-md-6 text-center pt-3">
            <a href={`/task_project/${item.id}`} class="btn btn-sm btn-outline-primary">Show
            </a>
            <a href={`/task_project/edit/${item.id}`} class="btn btn-sm btn-outline-primary">Edit
            </a>
            <a href="#" on:click={nextPage(`/task_project/gantt/${item.id}`)} class="btn btn-sm btn-outline-primary">Gantt
            </a>
        </div>
        <hr class="my-2" />
    </div>
    {/each}	
</div>
<!-- 
<a href={`/task_project/${item.id}`} class="btn btn-outline-primary">Show
</a>
<p>markdown diplay, OK</p>
-->