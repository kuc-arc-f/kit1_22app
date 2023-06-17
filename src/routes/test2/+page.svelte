<svelte:head>
	<title>Test</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import { goto } from '$app/navigation';
import HttpCommon from '$lib/HttpCommon';
import LibConfig from '$lib/LibConfig';
import KV from '$lib/KV';
import { PUBLIC_API_KEY } from '$env/static/public'

/** @type {import('./$types').PageData} */
export let data: any;
console.log(data);
/**
 *
 * @param
 *
 * @return
 */ 
 const initProc = async function () {
	try{
	const json = await HttpCommon.server_post({}, "/test/get_list");
console.log(json);
	} catch (e) {
      console.error(e);
      //alert("error, ");
    }
}
if(typeof(window) !== "undefined") {
	initProc();
}

/**
 * addPost
 * @param
 *
 * @return
 */ 
const put = async function () {
    try{
console.log("#put");
        const item = {id: 2000};
        const key = LibConfig.SESSION_KEY_USER;
        const result = await KV.put(key, item);
console.log("result=", result);        
    } catch (e) {
    console.error(e);
    alert("error, add");
    }
}
/**
 *
 * @param
 *
 * @return
 */ 
const get = async function () {
    try{
console.log("#get");
        const key = LibConfig.SESSION_KEY_USER;
        const result = await KV.get(key);
console.log("result=", result);        
    } catch (e) {
    console.error(e);
        alert("error, get");
    }
}
/**
 *
 * @param
 *
 * @return
 */ 
const deleteKV = async function () {
    try{
console.log("#delete");
        const key = LibConfig.SESSION_KEY_USER;
        const result = await KV.delete(key);
console.log("result=", result);        
    } catch (e) {
    console.error(e);
        alert("error, delete");
    }
}
</script>

<!-- MarkUp -->
<div class="text-column">
    <h1>Test2</h1>
    <hr />
    <button on:click={put} class="btn btn-primary my-2">Put
    </button>
    <hr />
    <button on:click={get} class="btn btn-primary my-2">get
    </button>
    <hr />
    <button on:click={deleteKV} class="btn btn-primary my-2">Delete
    </button>    
</div>

<!--
-->