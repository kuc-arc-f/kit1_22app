<svelte:head>
<title>Show</title>
<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import { onMount } from 'svelte';
/** @type {import('./$types').PageData} */
export let data;
//console.log(data);
//
const testFunc = function () {
console.log("#testFunc");
}
</script>

<!-- CSS -->
<style>
</style>

<!-- MarkUp -->
<div class="container my-2">
	<a href={`/er_chart`} class="btn">[ Back ]
	</a>
    <h1>{data.data.title}</h1>
    <p>Id: {data.id}</p>
    <hr />
    <pre class="mermaid">{data.data.content}</pre>
    <hr />
</div>

<!--
<button on:click={testFunc}  class="btn btn-primary my-2">test</button>
-->