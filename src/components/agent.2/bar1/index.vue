<template>
<div>
    <live_sell_table
    header="实时销售情况"
    :tableData="tableData"
    ></live_sell_table>



</div>

</template>

<script>

    import live_sell_table from '../../common/live_sell_table'
    import live_sell_dtails_table from '../../common/live_sell_dtails_table'


    name: 'agent2_bar1'

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


    }),

    }
</script>


<style>

.pad{
  padding-top: 20px;
}

</style>
