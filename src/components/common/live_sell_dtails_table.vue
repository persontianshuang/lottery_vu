<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
        <h3>{{ header }}</h3>
    </div>

    <el-table
        :data="tableData"
        style="width: 100%"
        :default-sort = "{prop: 'date', order: 'descending'}"
        >
        <el-table-column
        prop="city"
        label="统计"
        width="180px">
        </el-table-column>
        <el-table-column
        prop="all"
        label="总数"
        sortable
        width="180px">
        </el-table-column>

        <el-table-column
        prop="today"
        label="今日"
        sortable
        width="180px">
        </el-table-column>

        <el-table-column
        prop="this_month"
        label="本月"
        sortable

        >
        </el-table-column>

    </el-table>

   </el-card>
</template>


<script>
  export default {

    name: 'live_sell_dtails_table',

    props: {
      header: String,
      tableData: [Object]
    },

    data: () => ({
         
    })

  }
</script>


