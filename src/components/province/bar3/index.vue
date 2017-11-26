<template>

<el-card class="box-card">
  <div slot="header" class="clearfix">

    <el-button type="primary" icon="el-icon-search">添加</el-button>
  </div>

  </div>


<el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="加入时间"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="姓名"
      width="130">
      <template slot-scope="scope">
          <span>王小王</span>
      </template>
    </el-table-column>
    

    <el-table-column
      label="地址"
      width="180">
      <template slot-scope="scope">
        <span>山东烟台</span>
      </template>
    </el-table-column>

    <el-table-column
      label="手机"
      width="180">
      

      <template slot-scope="scope">
        <span>189389183</span>
      </template>

    </el-table-column>

    <el-table-column label="操作">
      <template slot-scope="scope">
        <!-- <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button> -->
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">暂停</el-button>
      </template>
    </el-table-column>




  </el-table>


</el-card>


</template>


<script>
  import { manage_branch } from '@/components/api/province'

  export default {

    name: 'province_bar3',
    // props: {
    //   header: String,
    //   tableData: [Object]
    // },

    data: () => ({
        value1: '',
        value2: '',

        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          status: 1,
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]

    }),


     methods: {
      // handleEdit(index, row) {
      //   console.log(index, row);
      // },
      handleDelete(index, row) {
        // post请求携带token，如果是验证权限
        // 通过uid找到用户改变status
        console.log(index);
        console.log(row);
        manage_branch(uid,status)
        .then((response) => {
          // 如果成功
          this.tableData[index].status= !this.tableData[index].status
        })
        
      }
    }

  }
</script>