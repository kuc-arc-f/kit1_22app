<svelte:head>
<title>Show</title>
<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import { marked } from 'marked';
import { EditId } from './stores';
import LibConfig from '$lib/LibConfig';
import LibAuth from '$lib/LibAuth';
import LibCommon from '$lib/LibCommon';
import HttpCommon from '$lib/HttpCommon';
import ModalComplete from '$lib/components/ModalComplete.svelte';
//import CrudEdit from './CrudEdit';
//
let id = 0, item: any ={}, createdAt = "", content="", messageModal = "";
let p_date = "";
//const p_date = LibCommon.converDateString(item.p_date);
/**
*
* @param
*
* @return
*/
const getItem = async function (id: number) {
    try{
        //modal
        MicroModal.init({
            disableScroll: true,
            awaitOpenAnimation: true,
            awaitCloseAnimation: true
        });        
        if(id <= 0) { return false; }
        let postItem: any = {
            "id": id
        }; 
        const json = await HttpCommon.server_post(postItem, "/plan/get");        
//        const json = await HttpCommon.server_post(postItem, "/todos/get");
console.log(json.data)
        item = json.data;
        createdAt = LibCommon.converDateString(item.createdAt);
console.log(createdAt);
        p_date = LibCommon.converDateString(item.p_date);
        const btn = document.getElementById("open_post_edit");
        btn?.click();
    } catch (e) {
        console.error(e);
    }    
}
//store
EditId.subscribe(value => {
    id = value;
console.log("Modal.editModal.id=", value);
    getItem(id);
});
/**
 * savePost
 * @param
 *
 * @return
 */ 
const savePost = async function () {
	try {
		const content = document.querySelector<HTMLInputElement>('#content');
		const item = {
			content : content?.value,
			id: Number(id),
		}
//console.log(item);
        const json = await HttpCommon.server_post(item, "/plan/update");
		console.log(json);
		if(json.ret !== 'OK'){
			throw new Error('Error , update');
		} else {
			messageModal = "Success, save todo";
			MicroModal.show('modal-1');			
		}
	} catch (error) {
		console.error(error);
	} 
}
//
const okFunction = function () {
    window.location.href = '/plan';
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
            id: Number(id),
        }
//console.log(item);
        const json = await HttpCommon.server_post(item, "/plan/delete");
console.log(json);
        if(json.ret !== LibConfig.OK_CODE) {
            throw new Error("Error, delete");
        } else {
            messageModal = "Success, delete";
            MicroModal.show('modal-1');
        }
	} catch (error) {
	    console.error(error);
	}
}
</script>

<!-- CSS -->
<style>
#open_post_edit { display: none ;}
</style>

<!-- MarkUp -->
<div class="container my-2">
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#fullEditModal"
    id="open_post_edit">Launch demo modal
    </button>
    <div class="modal fade" id="fullEditModal" tabindex="-1" aria-labelledby="fullEditModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title" id="fullEditModalLabel">{p_date}</h3>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>ID: {item.id}</p>
                <hr class="my-1" />
                <div class="col-md-6 form-group">
                    <label for="content">content</label>
                    <textarea id="content" name="content" required class="form-control"
                    rows="10" placeholder="markdown input, please">{item.content}</textarea>
                </div>       
                <button on:click={savePost} class="btn btn-primary my-1">Save</button>
                <hr class="my-1" />  
                <button on:click={deleteItem} class="btn btn-danger my-2">Delete</button>       
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
        </div>
    </div>
    <!-- message -->
    <ModalComplete bind:message={messageModal} okFunction={okFunction} />
</div>

<!--
<button type="button" class="btn btn-primary" onClick="saveButton();">Save changes</button>
-->
