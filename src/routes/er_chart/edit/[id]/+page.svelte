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
		const title = document.querySelector<HTMLInputElement>('#title');
		const content = document.querySelector<HTMLInputElement>('#content');
		const item = {
			title: title?.value,
			content : content?.value,
			id: Number(data.id),
		}
console.log(item);
		const json = await HttpCommon.server_post(item, "/er_chart/update");
		console.log(json);
		if(json.ret !== 'OK'){
			throw new Error('Error , update');
		} else {
			window.location.href = '/er_chart'
		}
	} catch (error) {
		console.error(error);
	} 
}
</script>

<!-- MarkUp -->
<div class="container my-2">
	<a href={`/er_chart`} class="btn">[ Back ]
	</a>		
	<h1>Edit</h1>
	ID: {data.id}
	<hr />
	<div class="col-sm-6">
		<label>Title:</label>
        <input type="text" name="title" id="title" class="form-control"
		 value= {data.item.title}  />		
	</div>
	<hr className="mt-2 mb-2" />
	<div className="col-md-6 form-group">
		<label for="content">content</label>
		<textarea id="content" name="content" required class="form-control"
		rows="10" placeholder="mermaid input, please">{data.item.content}</textarea>
	</div>

	<button on:click={savePost} class="btn btn-primary my-2">Save</button>
</div>
<!--
<button on:click={deleteItem} class="btn btn-danger my-2">Delete</button>
-->