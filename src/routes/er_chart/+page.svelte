<svelte:head>
	<title>Crud</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import { goto } from '$app/navigation';
import LibAuth from '$lib/LibAuth';
import HttpCommon from '$lib/HttpCommon';
import PaginateBox from '$lib/components/PaginateBox.svelte';
import CrudIndex from './CrudIndex';

/** @type {import('./$types').PageData} */
export let data: any;
let itemPage = 1, items = [], itemsAll = [], perPage: number = 10;
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
		items = json.data;
		itemsAll = items;	
		items = await CrudIndex.getPageList(itemsAll, itemPage, perPage);	
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
/**
* parentUpdateList
* @param
*
* @return
*/ 
const parentUpdateList = async function(page: number) {
  console.log("parentUpdateList=", page);
  itemPage = page;
  items = await CrudIndex.getPageList(itemsAll, page, perPage);
  console.log(items);
}
/**
* search
* @param
*
* @return
*/ 
const search = async function() {
    console.log("search");
    itemsAll = await CrudIndex.search();
    items = await CrudIndex.getPageList(itemsAll, itemPage, perPage);
console.log(items);
}
//
const clearSearch = async function() {
//    console.log("search");
  itemPage = 1;
  const seachKey = (<HTMLInputElement>document.querySelector("#searchKey"));
  seachKey.value = "";
  startProc();
}
</script>

<div class="container my-2">
    <div class="row">
        <div class="col-md-6">
            <h1>ErChart</h1>
            <p>mermaid.js display possible.</p>
        </div>
        <div class="col-md-6 text-end">
            <a href={`/er_chart/create`} class="btn btn-primary">Create
            </a>
        </div>
    </div>
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
    <hr />
    {#each items as item}
    <div>
        <h3>{item.title}</h3>
        <span>ID : {item.id}</span>
        <button on:click={nextPage(item.id)} class="btn btn-outline-primary mx-2" 
        >Show</button>					
        <a href={`/er_chart/edit/${item.id}`} class="btn">[ Edit ]
        </a>
        <hr />
    </div>
    {/each}	
    <PaginateBox  itemPage={itemPage} parentUpdateList={parentUpdateList} />
</div>

<!-- 
<a href={`/er_chart/${item.id}`} class="btn btn-outline-primary">Show
</a>
-->
