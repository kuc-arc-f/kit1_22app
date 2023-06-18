<svelte:head>
    <title>Test</title>
    <meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import { goto } from '$app/navigation';
import HttpCommon from '$lib/HttpCommon';
import LibConfig from '$lib/LibConfig';
import Test from './Test';

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
    } catch (e) {
    console.error(e);
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
const test = async function () {
    try{
console.log("#test");
        const resulte = await Test.xlsTest();
    } catch (e) {
    console.error(e);
    alert("error, add");
    }
}
</script>

<!-- MarkUp -->
<div class="text-column">
    <h1>Test3-xlsx</h1>
    <hr />
    <button on:click={test} class="btn btn-primary my-2">Test
    </button>
    <hr />
</div>

<!--
-->