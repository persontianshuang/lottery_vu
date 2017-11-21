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
    import { get_agent2 } from '@/components/api/agent'


    name: 'agent2_bar1'

    export default {
    components: {
        live_sell_table,
        live_sell_dtails_table,
    },


    data: () => ({
       tableData: []


    }),

    mounted() {
    get_agent2()
    .then((response) => {
        const req = response.data
        this.tableData = req

          })
    }

    }
</script>


<style>

.pad{
  padding-top: 20px;
}

</style>
