<template>
  <div>
    <el-input
      v-model="query.CarID"
      placeholder="请输入车牌号"
      style="width: 200px; margin: 10px;"
    />

    <el-button
      type="primary"
      icon="el-icon-search"
      @click="queryCarOut()"
    >查询</el-button>
    <el-table :data="list" border>
      <el-table-column prop="carOutID" label="编号" />
      <el-table-column prop="carOutCarID" label="车牌号" />
      <el-table-column prop="carOutTime" label="出场时间" />
      <el-table-column prop="carOutCarType" label="车辆类型" />
      <el-table-column prop="carOutBarrierEquipmentID" label="进场通道" />
      <el-table-column prop="carOutMoneyReceivable" label="应收金额" />
      <el-table-column prop="carOutMoneyLast" label="实收金额" />
      <el-table-column prop="carOutDescription" label="备注" />
    </el-table>
  </div>
</template>

<script>
import { getCarOut } from '@/api/barrier'
export default {
  data() {
    return {
      list: null,
      query: { CarID: '' }
    }
  },
  created() {
    this.queryCarOut()
  },
  methods: {
    queryCarOut() {
      getCarOut(this.query).then((response) => {
        this.list = response
      })
    }
  }
}
</script>

