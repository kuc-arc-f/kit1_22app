<svelte:head>
	<title>Test</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import { goto } from '$app/navigation';
import HttpCommon from '$lib/HttpCommon';
//import LibAuth from '$lib/LibAuth';
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
	} catch (e) {
      console.error(e);
    }
}

/**
 * addPost
 * @param
 *
 * @return
 */ 
 const addPost = async function () {
	try{
		const name = document.querySelector<HTMLInputElement>('#name');
		let item = {
			"title": "test_create3",
			"body": "b1"
		}		
console.log(item);
		const json = await HttpCommon.server_post(item, '/test/create');
console.log(json);
	} catch (e) {
      console.error(e);
      alert("error, add");
    }
}

</script>

<!-- MarkUp -->
<div class="text-column">
	<h3>TestList</h3>
	<hr />
    <ul>
        <li>
            <a href="/test">Test</a>
            <hr class="my-1" />
        </li>    
        <li>
            <a href="/test3">Test3: excel</a>
            <hr class="my-1" />
        </li>   
        <li>
            <a href="/test4">Test4: PDF</a>
            <hr class="my-1" />
        </li>
        <li>
            <a href="/test6">Test6: modal</a>
            <hr class="my-1" />
        </li>
    </ul>
	<hr />
    <h3>Testauth</h3>
    <ul>
        <li>
            <a href="/test_auth2">test_auth2: sessionValidate</a>
            <hr class="my-1" />
        </li>    
        <li>
            <a href="/test_auth3">test_auth3 :KV auth</a>
            <hr class="my-1" />
        </li>    
    </ul>

</div>

<!--
-->