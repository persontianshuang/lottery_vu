<template>
  <el-card class="box-card">

    <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
        prop="all"
        label="本省所有市销售数据"
        width="180">
        </el-table-column>

        <el-table-column
        prop="rank"
        label="">
        </el-table-column>
    </el-table>

    </el-card>
</template>


<script>
  export default {

    name: 'bar1_table2',
    props: {
      tableData: [Object]
    },
    data: () => ({
       
    })

  }
</script>