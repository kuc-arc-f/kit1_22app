<script lang="ts">
//import TaskIndex from "../../task_items/CrudIndex";
import TaskCrud from '../../../task_items/Crud';

import LibCommon from '$lib/LibCommon';
export let id, title, status, date;
let bg_status_color = "";

if(date) {
  date = LibCommon.converDateString(date);
} else {
  date = "";
}
//convertStatuName: function(code: number) : string
//console.log(date);
//console.log("id=", id);
//console.log("title=", title);
status = TaskCrud.convertStatusName(Number(status));
console.log("status=", status);
</script>

<!-- MarkUp -->
<tr>
    <th scope="row">{id}</th>
    <td>{status}</td>
    <td>{date}</td>
    <td>
        <a href={`/task_items/${id}`}><span class="task_title fs-5">{title}</span>
        </a>
        <a href={`/task_items/edit/${id}`}><span class="task_title mx-2">[Edit]</span>
        </a>
    </td>
</tr>

<style>
</style>

<!--
<span>{date}, ID: {id}</span>    
-->