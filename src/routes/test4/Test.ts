//import LibConfig from '../../lib/LibConfig';
//
const Test = {
  /**
   *
   * @param key: any
   *
   * @return
   */   
  testPdf : async function() : Promise<any>
  {
    try{
      let ret = false;
      console.log("#testPdf");
      //@ts-ignore
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF({ 
        orientation: 'p',
        format: 'a4',
      });
      const width = doc.internal.pageSize.width;
      doc.text("User123", 120, 30);
      //data
      doc.setFontSize(24);
      const items = [
        {title: 'DATA-1', price: 2000 },
        {title: 'DATA-2', price: 2000},
        {title: 'DATA-3', price: 2000},
        {title: 'DATA-4', price: 2000},
        {title: 'DATA-5', price: 2000},
        {title: 'DATA-6', price: 2000},
        {title: 'DATA-7', price: 2000},
        {title: 'DATA-8', price: 2000},
        {title: 'DATA-9', price: 2000},
        {title: 'DATA-10', price: 2000},
      ];
      const yStart = 58;
      let count = 0;
      for (const item of items) {
        console.log(item);
        doc.text(item.title, 24, yStart + count );
        doc.text(String(item.price) + ' JPY', 120, yStart + count );
        count = count + 13;
      }
      doc.save("p5.pdf");      
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
