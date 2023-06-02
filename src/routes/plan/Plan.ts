
import LibCommon from '../../lib/LibCommon';
import moment from 'moment'
//Plan
const Plan =  {
    /**
     * 日付データを , Date型に変換
     * @param
     *
     * @return
     */
    convertDateType:async function(items) : Promise<any>
    {
        try{
            let ret: any[] = [];
            items.forEach(function(item) {
                item.p_date = new Date(item.p_date);
//console.log(item);
                ret.push(item);
            });
            return ret;
        } catch (e) {
          console.error(e);
          throw new Error('Error , convertDateType');
        }
    },
    /**
     *
     * @param
     *
     * @return
     */    
    get_const: function(){
        return {
            DB_NAME: "plans_idx_kuc_db",
            DB_VERSION: 1,
            DB_STORE: {
                plans: '++id, p_date, content ,created_at',
            }
        }
    },    
    /*********************************
     * get_week_items
    ***********************************/ 
    get_week_items :function(moment: any){
        const start = this.get_start_date( moment )
        const weeks = this.get_week_array(start)
//console.log( weeks )
        return weeks
    },
    /*********************************
     * convert_week_array
    ***********************************/ 
    convert_week_array :function(weeks, plans, now_date ){  
        let ret = []
        const self = this
        const now_str = now_date.format('YYYY-MM-DD')
        weeks.forEach(function(week: any){
//console.log( now_str  )
            for(let i=0; i< 7; i++){
                if(week.weekItem[i].day != null){
                    let s = week.weekItem[i].day.format('YYYY-MM-DD')
                    let arr = self.get_plan_item(s, plans);
                    if(arr != null ){
                        let conte = "";
                        if(arr.content) {
                            conte = arr.content.substring(0, 6)
                        }
                        //console.log( arr  );
                        week.weekItem[i].content = conte
                        week.weekItem[i].id = arr.id
                        week.weekItem[i].db_none = 0
                    }
                    if(s === now_str){
                        week.weekItem[i].today = 1
                    }
                }
            }
            //@ts-ignore
            ret.push(week)
        }); 
        return ret
    },
    /*********************************
     * get_plan_item
    ***********************************/ 
    get_plan_item :function(day_str, plans){
        let ret = {}
        plans.forEach(function(plan){
            var s = LibCommon.formatDate(plan.p_date , "YYYY-MM-DD");
//console.log( plan.id );
            if(day_str === s){
                ret = {
                    content: plan.content,
                    id: plan.id,
                }
            }
        });
        return ret
    },
    /*********************************
     * get_week_array
    ***********************************/ 
    get_week_array :function(dt){
        var dayArray: any = this.init_day_params()
        var weeks: any[] = []
        var weekItem: any[] = []

        var day_of_week = dt.day()
        var days_in_month = dt.endOf('month').date()
// console.log( day_of_week )
        for(var i = 0; i < day_of_week;  i++){
            weekItem.push( dayArray )
        }
        var week_no = 1
        for(var day=1; day <= days_in_month ; day++){
            let dayItem: any =  this.init_day_params()     
            let dayStr = LibCommon.get_string_rigth(day , 2)

            var date = moment(dt.format('YYYY-MM-'+  dayStr))
            dayItem.day = date
            dayItem.day_disp = date.date()
            weekItem.push( dayItem )
            day_of_week = date.day()
            var divNum = (day_of_week % 7)
            if((divNum === 6) 
                || days_in_month === date.date() ){
                var num = 6 - day_of_week
                for(var iCt =0; iCt < num; iCt++ ){
                    var dayEmpty  = this.init_day_params()                    
                    weekItem.push( dayEmpty )
                }
                weeks.push({
                    no: week_no,
                    weekItem: weekItem,
                })
                weekItem = []
                week_no +=1
            }
        }
        return weeks
    },
    /**
     *
     * @param
     *
     * @return
     */    
    init_day_params :function(){
        return {
            day : null,
            day_disp : "",
            today : 0,
            content : null, 
            db_none : 1,           
            id : 0,  
        }
    },
    /*********************************
     * get_start_date
    ***********************************/ 
    get_start_date :function(dt){
        var yymm = dt.format('YYYY-MM')
        yymm = yymm + "-01"
        var ret = moment( yymm )
        return ret
    },
    /*********************************
     * get_start_date
    ***********************************/ 
   test1 :function(){
        console.log('#_func1aa')
        var dt = moment().toDate()
        var sub = moment().add(1, 'days').toDate()
        var day = moment().add(1, 'days').day()
    },

}
export default Plan;
