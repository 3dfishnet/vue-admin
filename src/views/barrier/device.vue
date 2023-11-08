<template>
  <div class="app-container">
    <h1> {{ name }} </h1>
    <el-input v-model="input" placeholder="道闸编码" style="width: 200px; margin: 5px;" />
    <el-input v-model="input" placeholder="道闸IP" style="width: 200px; margin: 5px;" />
    <el-input v-model="input" placeholder="道闸Mac" style="width: 200px; margin: 5px;" />
    <el-button type="primary" icon="el-icon-search">查询道闸</el-button>
    <el-button type="primary" icon="el-icon-search">添加道闸</el-button>
    <el-table v-loading="listLoading" :data="list" element-loading-text="Loading" border fit highlight-current-row>
      <el-table-column label="编号">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column prop="id" label="名称" />
      <el-table-column prop="id" label="道闸编码" />
      <el-table-column prop="id" label="道闸IP" />
      <el-table-column prop="id" label="版本号" />
      <el-table-column prop="id" label="方向" />
      <el-table-column prop="id" label="MAC地址" />
      <el-table-column prop="id" label="厂商" />
      <el-table-column prop="id" label="操作" />

    </el-table>
  </div>
</template>

<script>
import { getBarrierDeviceList } from '@/api/barrier'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getBarrierDeviceList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    }
  }
}
</script>
