import LibCommon from '$lib/LibCommon'
//
const Gantt = {
    /**
     *
     * @param
     *
     * @return
     */ 
    getTaskString: function (items: any, projectCreatedAt: string): string
    {
        try{
            let ret = "";
//            let count = 1;
            //@ts-ignore
            items.forEach((element, index) => {
                let start = "2023-12-12";
                let end = "2023-12-12";
                if(element.complete) {
                    end = LibCommon.converDateString(element.complete);
                }
                if(element.start_date) {
                    start = LibCommon.converDateString(element.start_date);
                }
//                let row  = "    section task" + String(index + 1) + "\n";
                let row  = "    section task" + "\n";
//                row += "        "+ element.title + "  :2014-01-12, 2014-01-30" + "\n";
                row += "        "+ element.title + ` :${start}, ${end}` + "\n";
                ret += row;
//console.log(element);
            });
            return ret;
        } catch (e) {
          console.error(e);
          throw new Error('Error , getTaskString');
        }
    },
  
}
export default Gantt;
