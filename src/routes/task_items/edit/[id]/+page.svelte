<svelte:head>
<title>Show</title>
<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import { marked } from 'marked';
import LibConfig from '$lib/LibConfig';
import LibAuth from '$lib/LibAuth';
import LibCommon from '$lib/LibCommon';
import HttpCommon from '$lib/HttpCommon';
import CrudEdit from "../../CrudEdit";
import ModalComplete from '$lib/components/ModalComplete.svelte';
//
/** @type {import('./$types').PageData} */
export let data: any, item: any= {}, post_id = 0, content = "", id = "";
let task: any = {};
let selected = 1;
let messageModal = ""
id = data.id;
//
console.log("[id=", data.id);
console.log(data.item);

/**
*
* @param
*
* @return
*/
const startProc= async function() {
	task = await CrudEdit.get(Number(id));
    selected = Number(task.status);
    task.complete = LibCommon.converDateString(task.complete);
console.log(task);
    //modal
    MicroModal.init({
        disableScroll: true,
        awaitOpenAnimation: true,
        awaitCloseAnimation: true
    });
}
startProc();
/**
 * deleteItem
 * @param
 *
 * @return
 */ 
const save = async function() {
    try{
console.log("#save.selected=", selected); 
        const resulte = await CrudEdit.update(Number(id), selected);
console.log(resulte);
        if(resulte) {
//            alert("Success, save");
            messageModal = "Success, Save";
			MicroModal.show('modal-1');
//            location.href = `/task_project/${data.item.projectId}`;
        }
    } catch (e) {
        console.error(e);
        throw new Error('Error , save');
    }    
}

/**
 * deleteItem
 * @param
 *
 * @return
 */ 
 async function deleteItem(){
	try {
		const item = {
			id: Number(data.id),
		}
//console.log(item);
    const json = await HttpCommon.server_post(item, '/tasks/delete');
console.log(json);
        if(json.ret !== LibConfig.OK_CODE) {
            throw new Error("Error, delete");
        } else {
//            alert("Success, delete");
            messageModal = "Success, delete";
            MicroModal.show('modal-1')
//            location.href = `/task_project/${data.item.projectId}`;
        }
	} catch (error) {
	    console.error(error);
	}
}
//
const okFunction = function () {
    window.location.href = `/task_project/${data.item.projectId}`;
}
</script>

<!-- CSS -->
<style>
</style>

<!-- MarkUp -->
<div class="container my-2">
    <a class="btn btn-outline-primary" href={`/task_project/${data.item.projectId}`}
    >Back</a>
    <h1>{data.item.title}</h1>
    ID: {data.item.id}
    <hr />
    <div class="col-md-9 form-group">
        <label class="fw-bold ">Title:</label>
        <input type="text" name="title" id="title" class="form-control"
        value={task.title} />
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
    <hr class="mt-2 mb-2" />
    <div class="col-md-6 form-group">
        <label class="col-sm-12">Scheduled Complete:</label>
        <input type="date"  class="form-control"  id="complete" name="complete"                   
        value={task.complete} required="required" />        
    </div>
    <hr />
    <div class="col-md-12 form-group">
        <label for="content">Content</label>
        <textarea id="content" name="content" required class="form-control"
        rows="10" placeholder="">{task.content}</textarea>
    </div> 
    <hr class="my-1" />  
    <button on:click={save} class="btn btn-primary my-2">Save</button>  
    <hr class="my-1" />
    <button on:click={deleteItem} class="btn btn-danger my-2">Delete</button>    
    <hr />
    <ModalComplete bind:message={messageModal} okFunction={okFunction} />
</div>

<!--
<hr class="my-1" />
name: {data.item.title}
-->
