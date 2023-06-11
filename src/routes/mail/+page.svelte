<svelte:head>
	<title>Posts</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import LibConfig from '$lib/LibConfig';
import LibAuth from '$lib/LibAuth';
import { goto } from '$app/navigation';
import { PUBLIC_API_URL } from '$env/static/public'
import HttpCommon from '$lib/HttpCommon';
import CrudIndex from './CrudIndex';

/** @type {import('./$types').PageData} */
export let data;
console.log(data);

/**
*
* @param
*
* @return
*/ 
const sendMail = async function () {
    try{
        const resulte = await CrudIndex.sendMail();
        console.log(resulte);
        if(resulte) {
            alert("Success, send");
        }
    } catch (e) {
        console.error(e);
//        alert("error, sendMail");
    }
}
</script>

<!-- MarkUp -->
<div class="container my-2">
    <h1>Mail-Test</h1>
    <hr />
    <div class="col-md-6 form-group">
        <label for="to_mail_address">To-Mail</label>
        <input type="text" id="to_mail_address" name="to_mail_address"
        class="form-control" required>
    </div>    
    <div class="col-sm-6">
        <label for="title">Title</label>
        <input type="text" id="title" name="title"
        class="form-control" required>		
    </div>
    <hr className="mt-2 mb-2" />
    <div className="col-md-6 form-group">
        <label for="content">内容</label>
        <textarea id="content" name="content" required class="form-control"
        rows="10" placeholder=""></textarea>
    </div>
    <hr className="mt-2 mb-2" />
    <button on:click={sendMail} class="btn btn-primary my-2">Send</button>
    <hr />
</div>
