<template>
  <div>
    <el-input v-model="query.barrierProtocolName" placeholder="请输入商家名称" style="width: 200px; margin: 5px;" />
    <el-button type="primary" icon="el-icon-search" style="margin: 5px;" @click="queryProtocol()">查询道闸</el-button>

    <el-table v-loading="listLoading" :data="list" border>
      <el-table-column prop="barrierProtocolName" label="厂商名称" />
      <el-table-column prop="barrierProtocolVersion" label="协议版本" />
      <el-table-column prop="barrierProtocolDeveloper" label="开发者" />
      <el-table-column prop="barrierProtocolDeveloperPhone" label="联系方式" />
      <el-table-column prop="barrierProtocolProtocolLink" label="产品" />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            :type="getType(scope.row.barrierProtocolState)"
            size="small"
            @click="changeStatus(scope.row)"
          >{{ getText(scope.row.barrierProtocolState) }}</el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
import { getProtocols, updateProtocolStatus } from '@/api/barrier'
import { Message } from 'element-ui'

export default {
  data() {
    return {
      list: null,
      listLoading: false,
      dialogFormVisible: false,
      query: {
        barrierProtocolName: ''
      }
    }
  },
  created() {
    this.queryProtocol()
  },
  methods: {
    queryProtocol() {
      this.listLoading = true
      getProtocols(this.query).then(response => {
        this.list = response.data
        this.listLoading = false
      })
    },
    changeStatus(data) {
      updateProtocolStatus(data).then((response) => {
        Message(response.data)
        this.queryProtocol()
      })
    },
    getType(status) {
      if (status === '启用') {
        return 'danger'
      } else {
        return 'primary'
      }
    },
    getText(status) {
      if (status === '启用') {
        return '已启用'
      } else {
        return '点击启用'
      }
    }
  }
}
</script>
