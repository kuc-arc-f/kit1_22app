//import LibCrud from '../../lib/LibCrud';
import LibConfig from '../../lib/LibConfig';
import HttpCommon from '../../lib/HttpCommon';
import Crud from './Crud';
//
const CrudEdit = {
  /**
   * delete:
   * @param key: any
   *
   * @return
   */   
  delete : async function(id: number) : Promise<any>
  {
    try{
      let ret = false;
      const item = {
        id: id
      }
//console.log(item);
      const json = await HttpCommon.server_post(item, '/project/delete');
console.log(json);
      if (json.ret ===  LibConfig.OK_CODE) {
        ret = true;
      }      
      return ret;      
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
  update : async function(id: number) : Promise<any>
  {
    try{
      let ret = false;
      let values = Crud.getInputValues();  
      values.id = Number(id);
//  console.log(values);
      const json = await HttpCommon.server_post(values, '/project/update');
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
//CrudIndex.startProc();

export default CrudEdit;
