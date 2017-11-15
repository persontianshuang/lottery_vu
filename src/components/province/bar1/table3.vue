<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
        <h3>本省各市实时销售情况</h3>
    </div>

    <el-table
        :data="tableData3"
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

    name: 'bar1_table3',
    data: () => ({
         tableData3: [
           {
            city: '成都市',
            all: '102013',
            today: '3131',
            this_month: '31313',
          },

          {
            city: '绵阳市',
            all: '9999999',
            today: '9999',
            this_month: '999999',
          },


         ]
    })

  }
</script>


