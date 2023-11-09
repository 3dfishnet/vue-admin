<template>
  <div>
    <el-input v-model="query.gatewayEquipmentName" placeholder="门禁名称" style="width: 200px; margin: 5px;" />
    <el-input v-model="query.gatewayOperateID" placeholder="日志ID" style="width: 200px; margin: 5px;" />
    <el-input v-model="query.gatewayOperateGatewayEquipmentID" placeholder="门禁编码" style="width: 200px; margin: 5px;" />

    <el-button
      type="primary"
      icon="el-icon-search"
      @click="queryLog()"
    >查询</el-button>

    <el-table :data="list" border>
      <el-table-column prop="gatewayOperateID" label="日志ID" />
      <el-table-column prop="gatewayEquipment.gatewayEquipmentName" label="门禁名称" />
      <el-table-column prop="gatewayEquipment.gatewayEquipmentID" label="门禁编码" />
      <el-table-column prop="gatewayEquipment.gatewayEquipmentIP" label="门禁IP" />
      <el-table-column prop="gatewayOperateType" label="操作类型" />
      <el-table-column prop="gatewayOperateDescription" label="操作说明" />
      <el-table-column prop="person.personName" label="用户名称" />
      <el-table-column prop="gatewayOperateState" label="状态" />
      <el-table-column prop="gatewayOperateCreateTime" label="操作时间" />
    </el-table>

  </div>
</template>

<script>
import { getLogs } from '@/api/gateway'
export default {
  data() {
    return {
      list: null,
      query: {
        gatewayEquipmentName: '',
        gatewayOperateID: '',
        gatewayOperateGatewayEquipmentID: ''
      }
    }
  },
  created() {
    this.queryLog()
  },
  methods: {
    queryLog() {
      getLogs(this.query).then((response) => {
        this.list = response.data
      })
    }
  }
}
</script>

