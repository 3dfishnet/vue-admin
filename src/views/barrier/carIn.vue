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
      @click="queryCarIn()"
    >查询</el-button>
    <el-table :data="list" border>
      <el-table-column prop="carInID" label="编号" />
      <el-table-column prop="carInCarID" label="车牌号" />
      <el-table-column prop="carInTime" label="进场时间" />
      <el-table-column prop="carInCarType" label="车辆类型" />
      <el-table-column prop="carInBarrierEquipmentID" label="进场通道" />
      <el-table-column prop="carInDescription" label="备注" />
    </el-table>

  </div>
</template>

<script>
import { getCarIn } from '@/api/barrier'
export default {
  data() {
    return {
      list: null,
      query: { CarID: '' }
    }
  },
  created() {
    this.queryCarIn()
  },
  methods: {
    queryCarIn() {
      getCarIn(this.query).then((response) => {
        this.list = response.data
        console.log(this.list)
      })
    }
  }
}
</script>
