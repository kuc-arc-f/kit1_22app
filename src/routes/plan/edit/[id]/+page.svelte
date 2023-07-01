<svelte:head>
	<title>Edit</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import LibConfig from '$lib/LibConfig';
import HttpCommon from '$lib/HttpCommon';
import LibCommon from '$lib/LibCommon';
import ModalComplete from '$lib/components/ModalComplete.svelte';

/** @type {import('./$types').PageData} */
export let data: any;
console.log(data);
let messageModal = ""
//const createdAt = LibCommon.converDateString(data.item.createdAt);
const p_date = LibCommon.converDateString(data.item.p_date);
console.log(p_date);

/**
 * start proc
 * @param
 *
 * @return
 */ 
 const startProc = async function () {
	try {
        //modal
        MicroModal.init({
            disableScroll: true,
            awaitOpenAnimation: true,
            awaitCloseAnimation: true
        });		
	} catch (e) {
      console.error(e);
    }	
}
startProc();
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
			id: Number(data.id),
		}
//console.log(item);
		const json = await HttpCommon.server_post(item, "/plan/update");
		console.log(json);
		if(json.ret !== 'OK'){
			throw new Error('Error , update');
		} else {
//			window.location.href = '/plan'
            messageModal = "Success, Save";
            MicroModal.show('modal-1');
		}
	} catch (error) {
		console.error(error);
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
    const json = await HttpCommon.server_post(item, "/plan/delete");
console.log(json);
        if(json.ret !== LibConfig.OK_CODE) {
            throw new Error("Error, delete");
        } else {
            messageModal = "Success, delete";
            MicroModal.show('modal-1');
//            window.location.href = '/plan'
        }
    } catch (error) {
        console.error(error);
    }
}
//
const okFunction = function () {
    window.location.href = '/plan';
}
</script>

<!-- MarkUp -->
<div class="container my-2">
	<a href={`/plan`} class="btn">[ Back ]
	</a>		
	<h1>Edit: {p_date}</h1>
	ID: {data.id}
	<hr class="my-1" />
	<div class="col-md-12 form-group">
		<label for="content">content</label>
		<textarea id="content" name="content" required class="form-control"
		rows="10" placeholder="markdown input, please">{data.item.content}</textarea>
	</div>
	<button on:click={savePost} class="btn btn-primary my-2">Save</button>
	<hr class="my-1" />
	<button on:click={deleteItem} class="btn btn-danger my-2">Delete</button>
    <ModalComplete bind:message={messageModal} okFunction={okFunction} />
</div>
<!--

-->