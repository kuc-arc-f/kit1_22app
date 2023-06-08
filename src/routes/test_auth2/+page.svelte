<svelte:head>
	<title>Test</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
/* auth, server side, db-session */
import { goto } from '$app/navigation';
import { PUBLIC_API_KEY } from '$env/static/public'

/** @type {import('./$types').PageData} */
export let data: any;
//console.log("validAuth=", data.validAuth);

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
</script>

<!-- MarkUp -->
<div class="text-column">
	<h1>TestAuth</h1>
	<hr />
</div>

<!--
-->