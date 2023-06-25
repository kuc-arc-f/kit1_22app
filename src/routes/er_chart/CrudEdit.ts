//import Crud from './Crud';
import LibConfig from '$lib/LibConfig';
import HttpCommon from '$lib/HttpCommon';

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
      const json = await HttpCommon.server_post(item, '/er_chart/delete');
//console.log(json);
      if (json.ret ===  LibConfig.OK_CODE) {
        ret = true;
      }      
      return ret;      
    } catch (e) {
      console.error(e);
    }
  },   

}
//

export default CrudEdit;
