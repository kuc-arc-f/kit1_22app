<svelte:head>
<title>Show</title>
<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import { marked } from 'marked';
import { itemId, EditId } from './stores';
import LibConfig from '$lib/LibConfig';
import LibAuth from '$lib/LibAuth';
import LibCommon from '$lib/LibCommon';
import HttpCommon from '$lib/HttpCommon';
//
let id = 0, item: any ={}, createdAt = "", content="", p_date = "";
/**
*
* @param
*
* @return
*/
const getItem = async function (id: number) {
    try{
        if(id <= 0) { return false; }
        let postItem: any = {
        "id": id
        }; 
        const json = await HttpCommon.server_post(postItem, "/plan/get");        
console.log(json.data)
        item = json.data;
        createdAt = LibCommon.converDateString(item.createdAt);
        p_date = LibCommon.converDateString(item.p_date);
console.log(createdAt);
//        content = marked.parse(item.content);
//console.log(content);
        const btn = document.getElementById("open_post_show");
        btn?.click();
    } catch (e) {
        console.error(e);
    }    
}
//store
itemId.subscribe(value => {
    id = value;
console.log("ModalShow.id=", value);
    getItem(id);
});
</script>

<!-- CSS -->
<style>
#open_post_show { display: none ;}
.container .pre_text {
    border: 1px solid #000;
    background: #eee;
    padding: 10px;
    font-family: BlinkMacSystemFont,"Segoe UI",Roboto;
    font-size: 1rem;
}
</style>

<!-- MarkUp -->
<div class="container my-2">
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#fullScreenModal"
    id="open_post_show">Launch demo modal
    </button>
    <div class="modal fade" id="fullScreenModal" tabindex="-1" aria-labelledby="fullScreenModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title" id="fullScreenModalLabel">{p_date}</h3>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="container">
                    <p>ID: {item.id}</p>
                    {createdAt}
                    <hr />
                    <pre class="pre_text">{item.content}</pre>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
        </div>
    </div>
</div>

<!--
<button type="button" class="btn btn-primary" onClick="saveButton();">Save changes</button>
-->
