<svelte:head>
<title>Crud</title>
<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import { goto } from '$app/navigation';
import LibAuth from '$lib/LibAuth';
import HttpCommon from '$lib/HttpCommon';
import PaginateBox from "./PaginateBox.svelte";
import TodoIndex from "./TodoIndex";

/** @type {import('./$types').PageData} */
export let data: any;
let itemPage = 1, items = [], itemsAll = [], perPage: number = 10;
items = data.items;
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
        const json = await HttpCommon.server_post(postItem, "/todos/get_list");
    console.log(json);  
        itemsAll = json.data;
        items = await TodoIndex.getPageList(itemsAll, itemPage, perPage);		
    } catch (e) {
        console.error(e);
    }	
}
console.log("#start: /test");
startProc();
//
const search = async function() {
    console.log("search");
    itemsAll = await TodoIndex.search();
    items = await TodoIndex.getPageList(itemsAll, itemPage, perPage);
console.log(items);
}
//
const clearSearch = async function() {
//    console.log("search");
  const seachKey = (<HTMLInputElement>document.querySelector("#searchKey"));
  seachKey.value = "";
  startProc();
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
  items = await TodoIndex.getPageList(itemsAll, page, perPage);
  console.log(items);
}
</script>

<!-- MarkUp -->
<div class="container my-2">
    <div class="row">
      <div class="col-md-6">
        <h1>Todo</h1>
        <p>markdown display possible.</p>
      </div>
      <div class="col-md-6 text-end">
        <a href={`/todo/create`} class="btn btn-primary">Create</a>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 text-end">
        <button class="btn btn-sm btn-outline-primary"  on:click={clearSearch}
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
        <span class="mx-2">ID : {item.id}</span>
        <a href={`/todo/${item.id}`} class="btn btn-outline-primary">Show
        </a>
        <a href={`/todo/edit/${item.id}`} class="btn">[ Edit ]
        </a>					
        <hr />
    </div>
    {/each}	
    <PaginateBox  itemPage={itemPage} parentUpdateList={parentUpdateList} />
</div>
<!-- 
<p>ID : {item.id}</p>
-->