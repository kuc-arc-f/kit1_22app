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
import Export from '../../Export';
//
/** @type {import('./$types').PageData} */
export let data: any, item: any= {}, post_id = 0, content = "", id = "";
let items: any[] = [], itemsNone = [], itemsWorking = [], itemsComplete = [];
//
console.log("[id=", data.id);
id = data.id;
//console.log(data.item);

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
    itemsNone = items.filter(item => (item.status === '1') );
//    console.log(itemsNone);
    itemsWorking = items.filter(item => (item.status === '2') );
//    console.log(itemsWorking);
    itemsComplete = items.filter(item => (item.status === '3') );
//    console.log(itemsComplete);
}
/**
*
* @param
*
* @return
*/
const exportExcel = async function () {
//console.log("#exportExcel");
    try{
        const data = {
            itemsNone: itemsNone,
            itemsWorking: itemsWorking,
            itemsComplete: itemsComplete,
        };
//console.log(data);
        await Export.exportXlsx(data);
    } catch (e) {
        console.error(e);
        throw new Error('Error , exportExcel');
    }
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
    <h1>Export: {data.item.name}</h1>
    ID: {data.item.id}
    <hr class="my-1" />
    <div class="text-center">
        <button class="btn btn-primary" on:click={exportExcel}>Export</button>
    </div>    
    <hr class="my-1" />

</div>

<!--
-->
