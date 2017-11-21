<template>

<el-card class="box-card">
  <div slot="header" class="clearfix">

    <div class="block">

    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="开始日"
      :picker-options="pickerOptions0">
    </el-date-picker>

    <el-date-picker
      v-model="value2"
      type="date"
      placeholder="截止日"
      :picker-options="pickerOptions0">
    </el-date-picker>

    <el-button type="primary" icon="el-icon-search">搜索</el-button>
  </div>

  </div>

<el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="time"
      label="本省名称"
      width="180">
    </el-table-column>

    <el-table-column
      prop="totle"
      label="日期">
    </el-table-column>

    <el-table-column
      prop="totle"
      label="总销售额（元）">
    </el-table-column>




  </el-table>

</el-card>


</template>


<script>
  export default {

    name: 'province_bar2',
    props: {
      header: String,
      tableData: [Object]
    },

    data: () => ({
        value1: '',
        value2: ''
    })

  }
</script>