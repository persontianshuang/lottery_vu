<template>
  <el-card class="box-card">

    <el-table
        :data="tableData2"
        stripe
        style="width: 100%">
        <el-table-column
        prop="date"
        label="本省所有市销售数据"
        width="180">
        </el-table-column>

        <el-table-column
        prop="address"
        label="">
        </el-table-column>
    </el-table>

    </el-card>
</template>


<script>
  export default {

    name: 'bar1_table2',
    data: () => ({
        tableData2: [{
          date: '全省总销售额',
          address: '425324534455'
        }, 
        {
          date: '全国当月排名',
          address: '2'
        }, 
        ],





    })

  }
</script>