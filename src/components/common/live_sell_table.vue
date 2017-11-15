<template>

<el-card class="box-card">
  <div slot="header" class="clearfix">
    <!-- <h3>本市实时销售情况</h3> -->
    <h3>{{ header }}</h3>
  </div>

<el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="time"
      label="统计"
      width="180">
    </el-table-column>

    <el-table-column
      prop="totle"
      label="实时销售数据（元）">
    </el-table-column>
  </el-table>

</el-card>


</template>


<script>
  export default {

    name: 'live_sell_table',
    props: {
      header: String,
      tableData: [Object]
    },

    data: () => ({
        
    })

  }
</script>