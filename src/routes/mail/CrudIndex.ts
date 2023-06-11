import LibConfig from '$lib/LibConfig';
import Crud from './Crud';
//
const CrudIndex = {
  /**
   *
   * @param key: any
   *
   * @return
   */   
  sendMail : async function() : Promise<any>
  {
    try{
      let ret = false;
      let values = Crud.getInputValues();
//console.log(values);
      const item = {
        to_mail: values.to_mail_address,
        title: values.title,
        content: values.content,
      }
console.log(item);
      const res = await fetch("/api/send_mail", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},      
        body: JSON.stringify(item)
      });
      const json = await res.json()      
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
export default CrudIndex;
