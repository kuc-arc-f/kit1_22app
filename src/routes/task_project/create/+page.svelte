<svelte:head>
	<title>Posts</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import LibConfig from '$lib/LibConfig';
import LibAuth from '$lib/LibAuth';
import Crud from '../Crud';
import { goto } from '$app/navigation';
import { PUBLIC_API_URL } from '$env/static/public'
import HttpCommon from '$lib/HttpCommon';
/** @type {import('./$types').PageData} */
export let data;
console.log(data);

/**
 * start proc
 * @param
 *
 * @return
 */ 
 const startProc = async function () {
	try {
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
		const values = Crud.getInputValues();
//console.log(values);
		const json = await HttpCommon.server_post(values, '/project/create');
console.log(json);
		if(json.ret === 'OK') {
			goto(`/task_project`);
		}
	} catch (e) {
      console.error(e);
      alert("error, add");
    }
}
</script>

<!-- MarkUp -->
<div class="container my-2">
	<a href={`/task_project`} class="btn">[ Back ]
	</a>		
	<h1>Create</h1>
	<hr />
	<div className="col-md-6 form-group">
		<label for="name">Name</label>
		<input type="text" id="name" name="name"
		class="form-control" required>
	</div>
	<hr className="mt-2 mb-2" />
	<div className="col-md-6 form-group">
		<label for="content">content</label>
		<textarea id="content" name="content" required class="form-control"
		rows="10" placeholder="markdown input, please"></textarea>
	</div>
	<hr className="mt-2 mb-2" />
	<button on:click={addPost} class="btn btn-primary my-2">Add</button>
	<hr />
</div>
