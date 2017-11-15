<template>
<div>
    <live_sell_table
    header="实时销售情况"
    :tableData="tableData"
    ></live_sell_table>

    <div class="pad">
      <live_sell_dtails_table
        header="下级各代理商实时销售情况"
        :tableData="tableData3"
      ></live_sell_dtails_table>
    </div>

</div>

</template>

<script>

    import live_sell_table from '../../common/live_sell_table'
    import live_sell_dtails_table from '../../common/live_sell_dtails_table'


    name: 'agent1_bar1'

    export default {
    components: {
        live_sell_table,
        live_sell_dtails_table,
    },


    data: () => ({
       tableData: [{
          time: '总数',
          totle: '425324534455'
        }, 
        {
          time: '今日',
          totle: '3144534'
        }, 
        {
          time: '本月',
          totle: '5423452345'
        }, 
        
        ],



        tableData3: [
           {
            city: '成都市',
            all: '102013',
            today: '3131',
            this_month: '31313',
          },

          {
            city: '绵阳市',
            all: '9999999',
            today: '9999',
            this_month: '999999',
          },


         ]

    }),

    }
</script>


<style>

.pad{
  padding-top: 20px;
}

</style>
