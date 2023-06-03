<script lang="ts">
//import TaskIndex from "../../task_items/CrudIndex";
export let id, title, status;
let bg_status_color = "";

console.log("id=", id);
console.log("title=", title);
console.log("status=", status);
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
        <div class="card-body">
          <div class="d-flex flex-column flex-md-row">
            <div class="card_col_icon px-md-2 py-2 ">
              <i class="bi bi-clipboard"></i>
            </div>
            <div class="card_col_body  p-md-2">
              <a href={`/task_items/${id}`}><span class="task_title fs-5">{title}</span>
              </a>
              <a href={`/task_items/edit/${id}`}><span class="task_title mx-2">[Edit]</span>
              </a>
              <br />
              <span>date, ID: {id}</span>
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