<script lang="ts">
export let object;
//console.log(object);
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
        <a href={`/plan/${dayObject.id}`}>{dayObject.content}
        </a><br />
        {#if dayObject.id}
            <a href={`/plan/edit/${dayObject.id}`} class="btn btn-outline-primary btn-sm td_edit"
            >Edit <i className="far fa-edit"></i>
            </a>
        {/if}        
        <br />
        <br />
    </td>
    {/if}
{/each}
<!-- CSS -->
