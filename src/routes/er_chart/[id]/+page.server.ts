export const csr = false;
import { error } from '@sveltejs/kit';
import LibConfig from '$lib/LibConfig';
import LibAuth from '$lib/LibAuth';
import HttpCommon from '$lib/HttpCommon';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  try {
    console.log("id=", params.id);
    let postItem: any = {
      "id": params.id
    }; 
    const json = await HttpCommon.post(postItem, "/er_chart/get");
    const item = json.data;
//console.log(item);
    if (item) {
      return {
          id: params.id,
          data: item,
      };
    }
    throw error(404, 'Not found');  
  } catch (e) {
    console.error(e);
    throw error(500, 'Error, +page.server')
  }
}

/*
const testData = [
    {id:1 , title: "t1"},
    {id:2 , title: "t2"},
    {id:3 , title: "t3"},
]
test1: "test1str",
test2: `
erDiagram
e02 {
    string name
    string email
    integer age
}
`,
*/
