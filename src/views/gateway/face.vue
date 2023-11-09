<template>
  <div>
    <el-input
      v-model="query.gatewayEquipmentName"
      placeholder="门禁名称"
      style="width: 200px; margin: 5px;"
    />
    <el-input
      v-model="query.personName"
      placeholder="用户名称"
      style="width: 200px; margin: 5px;"
    />
    <el-input
      v-model="query.gatewayEquipmentID"
      placeholder="门禁编码"
      style="width: 200px; margin: 5px;"
    />

    <el-button
      type="primary"
      icon="el-icon-search"
      @click="queryFace()"
    >查询</el-button>

    <el-table :data="list" border>
      <el-table-column prop="person.personFace" label="人脸" />
      <el-table-column prop="person.personName" label="用户名称" />
      <el-table-column prop="person.personID" label="身份证" />
      <el-table-column prop="gatewayEquipment.gatewayEquipmentName" label="门禁名称" />
      <el-table-column prop="gatewayBindState" label="状态" />
      <el-table-column prop="gatewayBindDescription" label="描述" />
      <el-table-column prop="gatewayEquipment.gatewayEquipmentID" label="门禁编码" />
      <el-table-column prop="gatewayEquipment.gatewayEquipmentIP" label="门禁IP" />
      <el-table-column prop="gatewayBindCreateTime" label="创建时间" />
    </el-table>

  </div>
</template>

<script>
import { getFaces } from '@/api/gateway'
export default {
  data() {
    return {
      list: null,
      query: {
        gatewayEquipmentName: '',
        personName: '',
        gatewayEquipmentID: ''
      }
    }
  },
  created() {
    this.queryFace()
  },
  methods: {
    queryFace() {
      getFaces(this.query).then((response) => {
        this.list = response.data
        console.log(response.data)
      })
    }
  }
}
</script>
