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
const p_date = LibCommon.converDateString(data.item.p_date);
const createdAt = LibCommon.converDateString(data.item.createdAt);
console.log(createdAt);
content = data.item.content;
content = marked.parse(content);
console.log(content);

</script>

<!-- CSS -->
<style>
</style>

<!-- MarkUp -->
<div class="container my-2">
    <a href={`/plan`} class="btn btn-outline-primary">Back</a>
    <hr class="my-2" />
    <h1>{p_date}</h1>
    <p>Create: {createdAt}</p>
    <hr />
    <p>Id:{data.id}</p>
    <hr />
    <pre>{data.item.content}</pre>
    <hr />
</div>

<!--
<button on:click={deleteItem} class="btn btn-danger my-2">Delete</button>
-->
