<svelte:head>
    <title>Test</title>
    <meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import { goto } from '$app/navigation';
import ModalMessage from './ModalMessage.svelte';

/** @type {import('./$types').PageData} */
export let data: any;
let messageModal = "";
console.log(data);
/**
 *
 * @param
 *
 * @return
 */ 
const initProc = async function () {
    try{
        //modal
        MicroModal.init({
            disableScroll: true,
            awaitOpenAnimation: true,
            awaitCloseAnimation: true
        });        
    } catch (e) {
    console.error(e);
    }
}
initProc();
/**
 *
 * @param
 *
 * @return
 */ 
const test1 = async function () {
    try{
        messageModal = "hoge message, hello 1234, 4567...hoge message, hello 1234, 4567...";
        MicroModal.show('modal-1');
    } catch (e) {
    console.error(e);
    alert("error, test1");
    }
}
//
const test2 = async function () {
    try{
        messageModal = "Good morning this is a pen,  Good morning this is a book";
        MicroModal.show('modal-1');
    } catch (e) {
    console.error(e);
    alert("error, test1");
    }
}

</script>

<!-- MarkUp -->
<div class="text-column">
    <h1>Test6: modal</h1>
    <hr />
    <button on:click={test1} class="btn btn-primary my-2">Test1</button>
    <hr />
    <button on:click={test2} class="btn btn-primary my-2">Test2</button>
    <hr />
    <ModalMessage bind:message={messageModal} />
</div>

<!--
-->