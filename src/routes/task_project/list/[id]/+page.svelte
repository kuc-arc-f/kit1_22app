<svelte:head>
<title>Show</title>
<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import TaskIndex from "../../../task_items/CrudIndex";
import IndexRow from "./IndexRow.svelte";
//export let id;

import { marked } from 'marked';
import LibConfig from '$lib/LibConfig';
import LibAuth from '$lib/LibAuth';
import LibCommon from '$lib/LibCommon';
import HttpCommon from '$lib/HttpCommon';
import CrudShow from '../../CrudShow';
//
/** @type {import('./$types').PageData} */
export let data: any, item: any= {}, post_id = 0, content = "", id = "";
let items: any[] = [], itemsNone = [], itemsWorking = [], itemsComplete = [];
//
console.log("[id=", data.id);
id = data.id;
console.log(data.item);

/**
*
* @param
*
* @return
*/
const startProc= async function() {
    items = await TaskIndex.getList(id);
console.log(items);
}
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
console.log(items);
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
        </div>
    </div>
    <hr class="my-1" />
    <div class="row">
        <div class="col-md-6"><h3>{data.item.name}</h3>
            ID: {data.item.id}
        </div>
        <div class="col-md-6 text-end">
            <a class="btn btn-primary mx-4" href={`/task_project/${id}`}>Grid</a>
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
    <table class="table">
        <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Status</th>
            <th scope="col">Complete</th>
            <th scope="col">Title</th>
        </tr>
        </thead>
        <tbody>
        {#each items as item}
          <IndexRow id={item.id} title={item.title} status={item.status} date={item.complete} />
        {/each}
        
        </tbody>
    </table>

</div>

<!--
-->
