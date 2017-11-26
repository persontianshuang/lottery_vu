<template>

<el-card class="box-card">
  <div slot="header" class="clearfix">
    
    <div class="block">

    
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="开始日"
      format="yyyy 年 MM 月 dd 日"
      value-format="yyyy-MM-dd">
    </el-date-picker>
    

    <el-date-picker
      v-model="value"
      type="date"
      placeholder="截止日"
      format="yyyy 年 MM 月 dd 日"
      value-format="yyyy-MM-dd">
    </el-date-picker>

    <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
  </div>

  </div>

<el-table
    :data="tableData"
    stripe
    style="width: 100%">


    <el-table-column
      prop="date"
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

    name: 'search_bar',
    props: {
      tableData: [Object]
    },

    data: () => ({
        value1: '',
        value2: ''
    }),

    methods: {
      search () {
        console.log(this.value1.toString())
        console.log(this.value2)
      }
    }

  }
</script>