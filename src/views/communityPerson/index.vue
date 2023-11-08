<template>
  <div class="app-container">
    <el-input v-model="name" placeholder="人员名称" style="width: 200px; margin: 5px;" />
    <el-select v-model="type" placeholder="人员类型">
      <el-option
        label=""
        value=""
      />
      <el-option
        label="员工"
        value="1"
      />
      <el-option
        label="业主"
        value="2"
      />
      <el-option
        label="访客"
        value="3"
      />
    </el-select>
    <el-button type="primary" icon="el-icon-search" @click="queryButton">查询人员</el-button>
    <el-button type="primary" icon="el-icon-search" @click="modifyButton">添加人员</el-button>
    <el-table v-loading="listLoading" :data="list" element-loading-text="Loading" border fit highlight-current-row>
      <el-table-column
        label="人脸"
        width="102"
      >
        <template slot-scope="scope">
          <img :src="scope.row.face" alt="">
        </template>
      </el-table-column>
      <el-table-column prop="name" label="名称" />
      <el-table-column prop="tel" label="电话" />
      <el-table-column prop="id" label="身份证" />
      <el-table-column label="人员类型">
        <template slot-scope="scope">
          <span>
            {{
              scope.row.type == "1"
                ? "员工"
                : scope.row.type == "2"
                  ? "业主"
                  : "访客"
            }}
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="time" label="创建时间" />
      <el-table-column label="操作" width="178">
        <div>
          <el-button type="primary" icon="el-icon-edit" size="small">修改</el-button>
          <el-button type="danger" icon="el-icon-delete" size="small">删除</el-button>
        </div>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getCommunityPersonList } from '@/api/table'

export default {
//   filters: {
//     statusFilter(status) {
//       const statusMap = {
//         published: 'success',
//         draft: 'gray',
//         deleted: 'danger'
//       }
//       return statusMap[status]
//     }
//   },
  data() {
    return {
      list: null,
      listLoading: true,
      name: '',
      type: ''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getCommunityPersonList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },
    queryButton() {
      this.listLoading = true
      getCommunityPersonList({ 'name': this.name, type: this.type }).then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },
    modifyButton() {
      alert('modify未完成 ' + this.name + ' ' + this.type)
    }
  }
}
</script>

