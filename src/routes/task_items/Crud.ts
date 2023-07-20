
const Crud = {
  /* statusType */
  statusType: {
    none: 1,
    working: 2,
    complete: 3,
  },
  /**
   *  convertStatusName
   * @param
   *
   * @return
   */  
  convertStatusName: function(code: number) : string
  {
    let ret = "";
    if(code === this.statusType.none) { ret = "None";}
    if(code === this.statusType.working) { ret = "Working";}
    if(code === this.statusType.complete) { ret = "Complete";}
    return ret;
  },
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
      const title = (<HTMLInputElement>document.querySelector("#title")).value;
      data.title = title;
      const content = (<HTMLInputElement>document.querySelector("#content")).value;
      data.content = content;
      const complete = (<HTMLInputElement>document.querySelector("#complete")).value;
      data.complete = complete;
      const start_date = (<HTMLInputElement>document.querySelector("#start_date")).value;
      data.start_date = start_date;
    
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
