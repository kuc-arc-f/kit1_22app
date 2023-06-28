<svelte:head>
<title>Show</title>
<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
let selected = 1;

import { marked } from 'marked';
import LibConfig from '$lib/LibConfig';
import LibAuth from '$lib/LibAuth';
import LibCommon from '$lib/LibCommon';
import CrudCreate from "../../CrudCreate";
import HttpCommon from '$lib/HttpCommon';
//
/** @type {import('./$types').PageData} */
export let data: any, item: any= {}, post_id = 0, content = "", id = "";
let complete = "";
//
console.log("[id=", data.id);
id = data.id;
//console.log(data.item);

//
const startProc= async function() {
    const dt = LibCommon.formatDate(new Date(), 'YYYY-MM-DD');
    complete = dt;
//console.log(complete);
}
startProc();
/**
*
* @param
*
* @return
*/
const save = async function() {
    try{
console.log("#save.selected=", selected); 
        const resulte = await CrudCreate.addItem(Number(id), selected);
console.log(resulte);
        if(resulte) {
            alert("Success, save");
            location.href = `/task_project/${data.id}`;
        }
    } catch (e) {
        console.error(e);
        throw new Error('Error , save');
    }    
}
</script>

<!-- CSS -->
<style>
</style>

<!-- MarkUp -->
<div class="container my-2">
    <a class="btn btn-outline-primary" href={`/task_project/${data.id}`}
    >Back</a>
    <hr class="my-1" />
    <h1>TaskCreate</h1>
    projectId: {data.item.id}
    <hr />
    <div class="col-md-9 form-group">
        <label class="fw-bold ">Title:</label>
        <input type="text" name="title" id="title" class="form-control" />
    </div>
    <hr />
    <label>
        <input bind:group={selected} type="radio" name="amount" value={1} 
        class="form-check-input mx-2" />none
    </label>
    <label>
        <input bind:group={selected} type="radio" name="amount" value={2} 
        class="form-check-input mx-2" />working
    </label>
    <label>
        <input bind:group={selected} type="radio" name="amount" value={3} 
        class="form-check-input mx-2" />complete
    </label>
    <hr className="mt-2 mb-2" />
    <div class="col-md-6 form-group">
        <label class="col-sm-12">Scheduled Complete:</label>
        <input type="date"  class="form-control"  id="complete" name="complete"                   
        value={complete} required="required" />        
    </div>
    <hr />
    <div className="col-md-6 form-group">
        <label for="content">content</label>
        <textarea id="content" name="content" required class="form-control"
        rows="10" placeholder=""></textarea>
    </div> 
    <hr />
    <button on:click={save} class="btn btn-primary my-2">Save</button>
</div>

<!--
<hr class="my-1" />
name: {data.item.title}
-->
