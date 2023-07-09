import axios from 'axios';

import LibCommon from '$lib/LibCommon'
//
const Export = {
  /**
  * exportRowXlxs : １行を出力する
  * @param
  *
  * @return
  */   
  exportRowXlxs: async function(items: any, startRow: number, worksheet: any)
  {
    try{
      let iCount = 0;
      let row = worksheet.getRow(1);
      for (const item of items) {
        let pos = startRow + iCount;
        row = worksheet.getRow(pos);
        let p_date = LibCommon.converDateString(item.p_date);
        row.getCell(1).value = item.id;
        row.getCell(2).value = p_date;
        row.getCell(3).value = item.content;
        iCount += 1;
      } 
      return iCount;     
    } catch (e) {
      console.error(e);
      throw new Error('error, exportRowXlxs: ' + e);
    }
  },
  /**
  * exportXlsx
  * @param
  *
  * @return
  */   
  exportXlsx: async function(taskData: any){
    try{
//console.log(taskData.itemsNone);
      const res = await axios.get("/plan_temp.xlsx", { responseType: "arraybuffer" });
      const data = new Uint8Array(res.data);
      //@ts-ignore
      const workbook = new ExcelJS.Workbook();
      await workbook.xlsx.load(data);
      const worksheet = workbook.getWorksheet('sheet1');
      worksheet.pageSetup = {orientation:'portrait'};
      const startRowNone = 4;
      let startRow = startRowNone;
      let iCount = 0;      
      let row: any = worksheet.getRow(1);
      const borderObj = {
        top: {style:'thin'},
        left: {style:'thin'},
        bottom: {style:'thin'},
        right: {style:'thin'}
      };
      // None
      iCount = await this.exportRowXlxs(taskData, startRow, worksheet, "None");
      startRow = iCount + startRow;  
//console.log("iCount=", iCount);  
      //
      worksheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, colNumber) => {
          // セルの枠線を設定
          if (rowNumber >= startRowNone) {
            cell.border = borderObj;
          }
        });
        row.commit();
      });     
      const uint8Array = await workbook.xlsx.writeBuffer();
  //console.log(uint8Array);
      //download
      const blob = new Blob([uint8Array], {type: 'application/octet-binary'});
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `plan.xlsx`;
      a.click();
      a.remove()       
    } catch (e) {
      console.error(e);
      throw new Error('error, exportXlsx: ' + e);
    }
  },  
}
export default Export;
