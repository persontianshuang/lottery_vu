<template>
<div>
    <live_sell_table
    header="实时销售情况"
    :tableData="tableData"
    ></live_sell_table>

    <div class="pad">
      <live_sell_dtails_table
        header="下面各二级代理商实时销售情况"
        :tableData="tableData2"
      ></live_sell_dtails_table>
    </div>

</div>

</template>

<script>

    import live_sell_table from '../../common/live_sell_table'
    import live_sell_dtails_table from '../../common/live_sell_dtails_table'

    import { get_agent1 } from '@/components/api/agent'

    name: 'agent1_bar1'

    export default {
    components: {
        live_sell_table,
        live_sell_dtails_table,
    },


    data: () => ({
       tableData: [],
       tableData2: [],



    }),

    mounted() {
        get_agent1()
        .then((response) => {
          console.log(response.data)
          const req = response.data
          this.tableData = req.all
          this.tableData2 = req.dtails

          })
    }

    }
</script>


<style>

.pad{
  padding-top: 20px;
}

</style>
