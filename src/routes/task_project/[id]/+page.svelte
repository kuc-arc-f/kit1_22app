<svelte:head>
<title>Show</title>
<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import TaskIndex from "../../task_items/CrudIndex";
import IndexRow from "./IndexRow.svelte";
//export let id;

import { marked } from 'marked';
import LibConfig from '$lib/LibConfig';
import LibAuth from '$lib/LibAuth';
import LibCommon from '$lib/LibCommon';
import HttpCommon from '$lib/HttpCommon';
import CrudShow from '../CrudShow';
import TaskCrud from '../../task_items/Crud';
//
/** @type {import('./$types').PageData} */
export let data: any, item: any= {}, post_id = 0, content = "", id = "";
let items: any[] = [], itemsNone = [], itemsWorking = [], itemsComplete = [];
//
console.log("[id=", data.id);
id = data.id;
console.log(data.item);
//console.log(TaskCrud.statusType);

/**
*
* @param
*
* @return
*/
const startProc= async function() {
    items = await TaskIndex.getList(id);
//console.log(items);
    setStateArray();
}
startProc();
//
const setStateArray = async function() {
    itemsNone = items.filter(item => (item.status === String(TaskCrud.statusType.none)) );
//    console.log(itemsNone);
    itemsWorking = items.filter(item => (item.status === String(TaskCrud.statusType.working)) );
//    console.log(itemsWorking);
    itemsComplete = items.filter(item => (item.status === String(TaskCrud.statusType.complete)) );
//    console.log(itemsComplete);
}
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
console.log(items);
}
/**
*
* @param
*
* @return
*/
const search = async function() {
    console.log("search");
    items = await CrudShow.search(Number(id));
    setStateArray();
console.log(items);
}
//
const nextPage = function(path: string) {
    location.href = path;
}
</script>

<!-- CSS -->
<style>
</style>

<!-- MarkUp -->
<div class="container my-2">
    <div class="row">
        <div class="col-md-6">
            <a href={`/task_project`} class="btn btn-outline-primary">Back
            </a>
        </div>
        <div class="col-md-6 text-end">
            <a class="btn btn-primary mx-4" href={`/task_items/create/${id}`}>Create</a>
            <a class="btn btn-outline-primary" href={`/task_project/export/${id}`}>Export</a>
        </div>
    </div>
    <hr class="my-1" />
    <div class="row">
        <div class="col-md-6"><h3>{data.item.name}</h3>
            ID: {data.item.id}
        </div>
        <div class="col-md-6 text-end p-2">
            <a class="btn btn-outline-primary mx-0" href="#" on:click={nextPage(`/task_project/gantt/${id}`)}>Gantt</a>
            <a class="btn btn-outline-primary mx-0" href={`/task_project/list/${id}`}>List</a>
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
    <hr class="my-1" />
    <div class="row">
        <div class="col-md-4 text-center">None</div>
        <div class="col-md-4 text-center">Working</div>
        <div class="col-md-4 text-center">Complete</div>
    </div> 
    <div class="row">	 
        <div class="col-md-4">
        {#each itemsNone as item}
            <IndexRow id={item.id} title={item.title} status="1" date={item.complete} />
        {/each}
        </div>
        <div class="col-md-4">
        {#each itemsWorking as item}
            <IndexRow id={item.id} title={item.title} status="2" date={item.complete}  />
        {/each}
        </div>
        <div class="col-md-4">
        {#each itemsComplete as item}
            <IndexRow id={item.id} title={item.title} status="3" date={item.complete} />
        {/each}
        </div>
    </div>   
</div>

<!--
ID: {data.item.id}
<a class="btn btn-outline-primary mx-0" href={`/task_project/gantt/${id}`}>Gantt</a>
-->

