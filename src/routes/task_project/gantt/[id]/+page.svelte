<svelte:head>
<title>Show</title>
<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import TaskIndex from "../../../task_items/CrudIndex";
import IndexRow from "./IndexRow.svelte";
//export let id;

import { marked } from 'marked';
import LibConfig from '$lib/LibConfig';
import LibAuth from '$lib/LibAuth';
import LibCommon from '$lib/LibCommon';
import HttpCommon from '$lib/HttpCommon';
import CrudShow from '../../CrudShow';
import Gantt from '../../Gantt';
//
/** @type {import('./$types').PageData} */
export let data: any, item: any= {}, post_id = 0, content = "", id = "";
let items: any[] = [], projectCreatedAt = "";
let project = {};
//
console.log("[id=", data.id);
id = data.id;
project = data.project;
items = data.data;
projectCreatedAt = project.createdAt;
projectCreatedAt = LibCommon.converDateString(projectCreatedAt);
//console.log("projectCreatedAt=", projectCreatedAt);
console.log(project.name);
const tadkString = Gantt.getTaskString(items, projectCreatedAt);
//console.log(tadkString);

const ganttText = `
gantt
    title ${project.name} Gantt Diagram
    dateFormat YYYY-MM-DD
${tadkString}
`;


</script>

<!-- CSS -->
<style>
</style>

<!-- MarkUp -->
<div class="container my-2">
    <div class="row">
        <div class="col-md-6">
            <a href={`/task_project`} class="btn btn-outline-primary">Back
            </a>
        </div>
        <div class="col-md-6 text-end">
        </div>
    </div>
    <hr class="my-1" />
    <div class="row">
        <div class="col-md-6"><h3>{project.name}</h3>
            ID: {project.id}
        </div>
        <div class="col-md-6 text-end">
            <a class="btn btn-primary mx-4" href={`/task_project/${id}`}>Grid</a>
        </div>
    </div>
    <hr class="my-1" />
    <pre class="mermaid">{ganttText}</pre>
    <hr />

</div>

<!--
-->
