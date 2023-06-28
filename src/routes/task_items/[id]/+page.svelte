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
//
/** @type {import('./$types').PageData} */
export let data: any, item: any= {}, post_id = 0, content = "";
//
console.log("[id=", data.id);
item = data.item;
item.complete = LibCommon.converDateString(item.complete);
console.log(item);

/**
*
* @param
*
* @return
*/

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
            alert("Success, delete");
            location.href = `/task_project/${data.item.projectId}`;
        }
	} catch (error) {
	    console.error(error);
	}
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
    <p>Scheduled Complete: {item.complete}</p>
    <hr />
    <pre>{data.item.content}</pre>
    <hr />
    <button on:click={deleteItem} class="btn btn-danger my-2">Delete</button>
</div>

<!--
-->
