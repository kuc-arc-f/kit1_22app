//import LibCrud from '../../lib/LibCrud';
import LibConfig from '$lib/LibConfig';
import HttpCommon from '$lib/HttpCommon';
//
const CrudShow = {
  /**
  *
  * @param
  *
  * @return
  */
  /**
  *
  * @param
  *
  * @return
  */  
  search :async function (id: number): Promise<any>
  {
    try{
      const seachKey = (<HTMLInputElement>document.querySelector("#searchKey")).value;
      const postItem = {
        projectId: id, 
        seachKey: seachKey,
      }
//console.log(postItem); 
      const json = await HttpCommon.server_post(postItem, "/tasks/search");
console.log(json);      
      let items: any[] = [];
      items = json.data;
//console.log(items);
      return items;
    } catch (e) {
      console.error(e);
      throw new Error("Error, search");
    } 
  },  
  /**
  * startProc
  * @param
  *
  * @return
  */   
  startProc :async function (): Promise<void> 
  {
    try{
      console.log("#startProc");
      //
      const button: any = document.querySelector('#status_complete');
      button.addEventListener('click', async () => {
        console.log("#status_complete");
      });      
    } catch (e) {
      console.error(e);
    }    
  } 
}
//
//CrudIndex.startProc();

export default CrudShow;
