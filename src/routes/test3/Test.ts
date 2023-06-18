//import LibConfig from '../../lib/LibConfig';
//
const Test = {
  /**
   *
   * @param key: any
   *
   * @return
   */   
  xlsTest : async function() : Promise<any>
  {
    try{
      let ret = false;
      console.log("#xlsTest");
      //@ts-ignore
      const workbook = new ExcelJS.Workbook();
      workbook.addWorksheet('My Sheet');
      const worksheet = workbook.getWorksheet('My Sheet');
      // 列を定義
      worksheet.columns = [
        { header: 'ID', key: 'id' },
        { header: 'Name', key: 'name' },
        { header: 'Price', key: 'price' },
      ];
      // 行を定義
      worksheet.addRow({id: 1001, name: 'oracnge', price: 370});
      worksheet.addRow({id: 1002, name: 'banana', price: 300});
      worksheet.addRow({id: 1003, name: 'apple', price: 360});
      worksheet.addRow({id: 1004, name: 'tomoto', price: 390});
      // UInt8Arrayを生成
      const uint8Array = await workbook.xlsx.writeBuffer();
      // Blob
      const blob = new Blob([uint8Array], {type: 'application/octet-binary'});
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `sample.xlsx`;
      a.click();
      // ダウンロード後は不要なのでaタグを除去
      a.remove()
      return ret;      
    } catch (e) {
      console.error(e);
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
//Test.startProc();

export default Test;
