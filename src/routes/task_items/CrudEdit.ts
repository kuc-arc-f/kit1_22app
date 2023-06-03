import Crud from './Crud';
import LibConfig from '../../lib/LibConfig';
import HttpCommon from '../../lib/HttpCommon';
//
const CrudEdit = {
  /**
   *
   * @param key: any
   *
   * @return
   */      
  porjectGet: async function(id: number) : Promise<any>
  {
    try{
      let item: any = {
        "id": id
      };
      const json = await HttpCommon.server_post(item, "/project/get");
//console.log(json);       
      item = json.data;
//console.log(item);
      return item;      
    } catch (e) {
      console.error(e);
    }
  },  
  /**
   * get:
   * @param key: any
   *
   * @return
   */      
  get: async function(id: number) : Promise<any>
  {
    try{
      let item: any = {
        "id": id
      };
      const json = await HttpCommon.server_post(item, "/tasks/get");
//console.log(json);       
      item = json.data;
console.log(item);
      return item;      
    } catch (e) {
      console.error(e);
    }
  },  
  /**
   *
   * @param key: any
   *
   * @return
   */
  update : async function(id: number, selected : number) : Promise<any>
  {
    try{
      let ret = false;
      let values = Crud.getInputValues();  
      const complete = (<HTMLInputElement>document.querySelector("#complete")).value;
      values.id = Number(id);
      values.complete = complete;
      values.status = String(selected);
  console.log(values);
  //return;
      const json = await HttpCommon.server_post(values, '/tasks/update');
      console.log(json);
      if (json.ret ===  LibConfig.OK_CODE) {
        ret = true;
      } 
      return ret;
    } catch (e) {
      console.error(e);
      throw new Error('Error , update');
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
    } catch (e) {
      console.error(e);
    }    
  } 
}
//
//CrudEdit.startProc();

export default CrudEdit;
