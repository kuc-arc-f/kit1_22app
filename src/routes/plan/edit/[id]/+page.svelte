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
console.log(item);
		const json = await HttpCommon.server_post(item, "/plan/update");
		console.log(json);
		if(json.ret !== 'OK'){
			throw new Error('Error , update');
		} else {
			window.location.href = '/plan'
		}
	} catch (error) {
		console.error(error);
	} 
}
</script>

<!-- MarkUp -->
<div class="container my-2">
	<a href={`/plan`} class="btn">[ Back ]
	</a>		
	<h1>Edit: {data.item.p_date}</h1>
	ID: {data.id}
	<hr className="mt-2 mb-2" />
	<div className="col-md-6 form-group">
		<label for="content">content</label>
		<textarea id="content" name="content" required class="form-control"
		rows="10" placeholder="markdown input, please">{data.item.content}</textarea>
	</div>

	<button on:click={savePost} class="btn btn-primary my-2">Save</button>
</div>
<!--
<button on:click={deleteItem} class="btn btn-danger my-2">Delete</button>
-->