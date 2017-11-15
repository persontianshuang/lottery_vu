<template>

<el-card class="box-card">
  <div slot="header" class="clearfix">
    <h3>本省实时销售情况</h3>
  </div>

<el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="date"
      label="统计"
      width="180">
    </el-table-column>

    <el-table-column
      prop="address"
      label="实时销售数据（元）">
    </el-table-column>
  </el-table>

</el-card>


</template>


<script>
  export default {

    name: 'bar1_table1',
    data: () => ({
        tableData: [{
          date: '总数',
          address: '425324534455'
        }, 
        {
          date: '今日',
          address: '3144534'
        }, 
        {
          date: '本月',
          address: '5423452345'
        }, 
        
        ],
    })

  }
</script>