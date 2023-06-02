//import LibCrud from '../../lib/LibCrud';

const Crud = {
  /**
   * 
   * @param key: any
   *
   * @return
   */
  getInputValues: function() : any
  {
    try{
      const data: any = {};
  
      // inputタグから値を取得し、オブジェクトにセットする
      const p_date = (<HTMLInputElement>document.querySelector("#p_date")).value;
      data.p_date = p_date;
      
      const content = (<HTMLInputElement>document.querySelector("#content")).value;
      data.content = content;
          
      return data;
    } catch (e) {
      console.error(e);
      throw new Error('Error , getInputValues');
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
    } catch (e) {
      console.error(e);
    }    
  } 
}
//
//Crud.startProc();

export default Crud;
