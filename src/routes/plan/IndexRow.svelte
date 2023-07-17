<script lang="ts">
export let object, parentShowFunction, parentEditFunction;
console.log(object);
//
const showModal = function (id: number) {
console.log("showModal= ", id)
    parentShowFunction(id);
}
//
const editModal = function (id: number) {
console.log("editModal= ", id)
    parentEditFunction(id);
}

</script>

<!-- MarkUp -->
{#each object as dayObject}
    {#if dayObject.db_none===1}
    <td class="td_cls">{dayObject.day_disp}<br />
        <br />
        <br />
    </td>    
    {:else}
    <td class="td_cls pb-4">{dayObject.day_disp}<br />
        <a href="#" on:click={showModal(dayObject.id)}>{dayObject.content}
        </a><br />
        {#if dayObject.id}
            <a href="#" on:click={editModal(dayObject.id)} class="btn btn-outline-primary btn-sm td_edit"
            >Edit<i className="far fa-edit"></i>
            </a><br />            
        {/if}        
        <br />
        <br />
    </td>
    {/if}
{/each}
<!-- CSS -->

<!--
<a href={`/plan/edit/${dayObject.id}`} class="btn btn-outline-primary btn-sm td_edit"
>Edit <i className="far fa-edit"></i>
</a>
<button on:click={showModal(dayObject.id)} >[ Show ]</button>
<br />
<a href={`/plan/${dayObject.id}`}>{dayObject.content}
</a>
-->
