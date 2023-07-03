<script lang="ts">
//import TaskIndex from "../../task_items/CrudIndex";
import LibCommon from '$lib/LibCommon';
export let id, title, status, date;
let bg_status_color = "";

if(date) {
  date = LibCommon.converDateString(date);
} else {
  date = "";
}
console.log(date);
console.log("id=", id);
//console.log("title=", title);
//console.log("status=", status);
if(status === '2'){
    bg_status_color = "task_card_bg_blue";
}else if(status === '3'){
    bg_status_color = "task_card_bg_gray";
}
</script>

<!-- MarkUp -->
<div class="">
    <div class="row justify-content-center p-1 task_index_row">
      <div class={`task_card_box card shadow-lg mb-0 ${bg_status_color}`}>
        <div class="card-body p-2">
          <div class="d-flex flex-column flex-md-row">
            <div class="card_col_icon px-md-2 py-2 ">
              <i class="bi bi-clipboard"></i>
            </div>
            <div class="card_col_body  p-md-0">
              <a href={`/task_items/${id}`}><span class="task_title fs-5">{title}</span>
              </a>
              <br />
              <a href={`/task_items/edit/${id}`}><span class="task_title mx-2">[Edit]</span>
              </a>
              <span>{date}, ID: {id}</span>
            </div>
          </div>
        </div>
      </div>
    </div>    
</div>

<style>
</style>

<!--
-->