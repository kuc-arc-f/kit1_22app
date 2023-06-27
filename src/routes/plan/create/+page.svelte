<svelte:head>
	<title>Posts</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import { onMount } from 'svelte';
import LibConfig from '$lib/LibConfig';
import LibAuth from '$lib/LibAuth';
import Crud from '../Crud';
import { goto } from '$app/navigation';
import { PUBLIC_API_URL } from '$env/static/public'
import HttpCommon from '$lib/HttpCommon';
import LibCommon from '$lib/LibCommon';
import ModalComplete from '$lib/components/ModalComplete.svelte';
/** @type {import('./$types').PageData} */
export let data;
let messageModal = "";
console.log(data);

/**
 * start proc
 * @param
 *
 * @return
 */ 
const startProc = async function () {
    try {
        const dt = LibCommon.formatDate(new Date(), 'YYYY-MM-DD');
    //console.log(dt);
        const p_date: any = document.querySelector('#p_date');
        p_date.value = dt;
        MicroModal.init({
            disableScroll: true,
            awaitOpenAnimation: true,
            awaitCloseAnimation: true
        });
    } catch (e) {
        console.error(e);
    }	
}
//if(typeof(window) !== "undefined"){
//}
onMount(async () => {
	startProc();
});
/**
 * addPost
 * @param
 *
 * @return
 */ 
const addPost = async function () {
	try{
//console.log("PUBLIC_API_URL=", PUBLIC_API_URL);
		let values = Crud.getInputValues();
		values.userId = LibAuth.getUserId();
console.log(values);
		const json = await HttpCommon.server_post(values, '/plan/create');
console.log(json);
		if(json.ret === 'OK') {
//			goto(`/plan`);
            messageModal = "Success, Save";
			MicroModal.show('modal-1');
		}
	} catch (e) {
      console.error(e);
      alert("error, add");
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
	<h1>Create</h1>
	<hr />
	<div class="col-md-6 form-group">
		<label class="col-sm-3 control-label">日付</label>
		<div class="col-sm-6">
			<input type="date"  class="form-control" value="" id="p_date" name="p_date"                   
				required="required" />
		</div>                
	</div>
	<hr className="mt-2 mb-2" />
	<div className="col-md-6 form-group">
		<label for="content">内容</label>
		<textarea id="content" name="content" required class="form-control"
		rows="10" placeholder="markdown input, please"></textarea>
	</div>
	<hr className="mt-2 mb-2" />
	<button on:click={addPost} class="btn btn-primary my-2">Add</button>
	<hr />
    <ModalComplete bind:message={messageModal} okFunction={okFunction} />
</div>
