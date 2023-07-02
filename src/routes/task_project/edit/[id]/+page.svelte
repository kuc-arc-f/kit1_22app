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
    //modal
    MicroModal.init({
        disableScroll: true,
        awaitOpenAnimation: true,
        awaitCloseAnimation: true
    });
}
//startProc();
/**
 * deleteItem
 * @param
 *
 * @return
 */ 
const save = async function() {
    try{
console.log("#save="); 
        const resulte = await CrudEdit.update(Number(id));
console.log(resulte);
        if(resulte) {
//            alert("Success, save");
            messageModal = "Success, Save";
			MicroModal.show('modal-1');
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
        const resulte = await CrudEdit.delete(Number(data.id));
console.log(resulte);
        if(!resulte) {
            throw new Error("Error, delete");
        } else {
//            alert("Success, delete");
            messageModal = "Success, delete";
            MicroModal.show('modal-1')
        }
	} catch (error) {
	    console.error(error);
	}
}
//
const okFunction = function () {
    window.location.href = `/task_project`;
}
</script>

<!-- CSS -->
<style>
</style>

<!-- MarkUp -->
<div class="container my-2">
    <a class="btn btn-outline-primary" href={`/task_project`}
    >Back</a>
    <h1>{data.item.name}</h1>
    ID: {data.item.id}
    <hr />
	<div className="col-md-6 form-group">
		<label for="name">Name</label>
		<input type="text" id="name" name="name" value={data.item.name}
		class="form-control" required>
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
	<div className="col-md-6 form-group">
		<label for="content">content</label>
		<textarea id="content" name="content" required class="form-control"
		rows="10" placeholder="">{data.item.content}</textarea>
	</div>
-->
