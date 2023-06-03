<svelte:head>
<title>Show</title>
<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import { marked } from 'marked';
import LibConfig from '$lib/LibConfig';
import LibAuth from '$lib/LibAuth';
//import LibCommon from '$lib/LibCommon';
import HttpCommon from '$lib/HttpCommon';
//
/** @type {import('./$types').PageData} */
export let data: any, item: any= {}, post_id = 0, content = "";
//
console.log("[id=", data.id);
console.log(data.item);

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
    const json = await HttpCommon.server_post(item, "/todos/delete");
console.log(json);
        if(json.ret !== LibConfig.OK_CODE) {
            throw new Error("Error, delete");
        } else {
            window.location.href = '/todo'
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
    <h1>{data.item.name}</h1>
    ID: {data.item.id}
    <hr />
    {@html content}
    <hr />
    <button on:click={deleteItem} class="btn btn-danger my-2">Delete</button>
</div>

<!--
<hr class="my-1" />
name: {data.item.title}
-->
