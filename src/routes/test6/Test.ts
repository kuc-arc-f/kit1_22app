//import LibConfig from '../../lib/LibConfig';
//
const Test = {
  /**
   *
   * @param key: any
   *
   * @return
   */   
  test1 : async function() : Promise<any>
  {
    try{
      let ret = false;
      console.log("#test1");      
      return ret;      
    } catch (e) {
      console.error(e);
    }
  },  
}

export default Test;
