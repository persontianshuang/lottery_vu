<template>
<div>
    <live_sell_table
    header="本省实时销售情况"
    :tableData="tableData"
    ></live_sell_table>

    <bar1_table2
    :tableData="tableData2"
    ></bar1_table2> 

    <div class="pad">
        <live_sell_dtails_table
        header="本省各市实时销售情况"
        :tableData="tableData3"
      ></live_sell_dtails_table>
    </div>
</div>

</template>

<script>

    import live_sell_table from '../../common/live_sell_table'
    import live_sell_dtails_table from '../../common/live_sell_dtails_table'
    import bar1_table2 from './table2'

    import { get_province } from '@/components/api/province'


    name: 'province_bar1'

    export default {
    components: {
        live_sell_table,
        bar1_table2,
        live_sell_dtails_table,
    },


    data: () => ({
      
        tableData: [],
        tableData2: [],
        tableData3: []
    }),


    mounted() {
      get_province()
      .then((response) => {
        // console.log(response.data)
        const req = response.data
        this.tableData = req.all
        this.tableData2 = req.rank
        this.tableData3 = req.city

        })
    }

    }
</script>


<style>

.pad{
  padding-top: 20px;
}

</style>
