<svelte:head>
	<title>Posts</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import LibConfig from '$lib/LibConfig';
import LibAuth from '$lib/LibAuth';
import { goto } from '$app/navigation';
import { PUBLIC_API_URL } from '$env/static/public'
import ModalComplete from '$lib/components/ModalComplete.svelte';
import HttpCommon from '$lib/HttpCommon';
/** @type {import('./$types').PageData} */
export let data;
console.log(data);
let messageModal = "";

/**
 * start proc
 * @param
 *
 * @return
 */ 
 const startProc = async function () {
	try {
        MicroModal.init({
            disableScroll: true,
            awaitOpenAnimation: true,
            awaitCloseAnimation: true
        });		
	} catch (e) {
      console.error(e);
    }	
}
if(typeof(window) !== "undefined"){
	startProc();
}
/**
 * addPost
 * @param
 *
 * @return
 */ 
const addPost = async function () {
	try{
		const title = document.querySelector<HTMLInputElement>('#title');
		const content = document.querySelector<HTMLInputElement>('#content');
		const item = {
			title: title?.value,
			content : content?.value,
			completed: 0,
			userId:  LibAuth.getUserId(),
		}
console.log(item);
		const json = await HttpCommon.server_post(item, '/er_chart/create');
console.log(json);
		if(json.ret === 'OK') {
			messageModal = "Success, Save";
			MicroModal.show('modal-1');			
//			goto(`/er_chart`);
		}
	} catch (e) {
      console.error(e);
      alert("error, add");
    }
}
//
const okFunction = function () {
    window.location.href = '/er_chart';
}
</script>

<!-- MarkUp -->
<div class="container my-2">
	<a href={`/er_chart`} class="btn">[ Back ]
	</a>		
	<h1>Create</h1>
	<hr />
	<div class="col-sm-6">
		<label for="title">Title</label>
		<input type="text" id="title" name="title"
		class="form-control" required>		
	</div>
	<hr className="mt-2 mb-2" />
	<div className="col-md-6 form-group">
		<label for="content">Content</label>
		<textarea id="content" name="content" required class="form-control"
		rows="10" placeholder="mermaid input, please"></textarea>
	</div>
	<hr className="mt-2 mb-2" />
	<button on:click={addPost} class="btn btn-primary my-2">Add</button>
	<hr />
	<ModalComplete bind:message={messageModal} okFunction={okFunction} />
</div>
