<svelte:head>
	<title>Edit</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import LibConfig from '$lib/LibConfig';
import HttpCommon from '$lib/HttpCommon';

/** @type {import('./$types').PageData} */
export let data: any;
console.log(data);

if(typeof(window) !== "undefined") {
}
/**
 * savePost
 * @param
 *
 * @return
 */ 
const savePost = async function () {
	try {
		const title = document.querySelector<HTMLInputElement>('#title');
		const item = {
			title: title?.value,
			content : '',
			id: Number(data.id),
		}
//console.log(item);
		const json = await HttpCommon.server_post(item, "/todos/update");
		console.log(json);
		if(json.ret !== 'OK'){
			throw new Error('Error , update');
		} else {
			window.location.href = '/crud'
		}
	} catch (error) {
		console.error(error);
	} 
}
</script>

<!-- MarkUp -->
<div class="container my-2">
	<a href={`/crud`} class="btn">[ Back ]
	</a>		
	<h1>Edit</h1>
	ID: {data.id}
	<hr />
	<div class="col-sm-6">
		<label>Title:</label>
        <input type="text" name="title" id="title" class="form-control"
		 value= {data.item.title}  />		
	</div>
	<button on:click={savePost} class="btn btn-primary my-2">Save</button>
</div>
<!--
<button on:click={deleteItem} class="btn btn-danger my-2">Delete</button>
-->