<template>
  <div>

    <el-input
      v-model="query.parkingLotID"
      placeholder="请输入停车场ID"
      style="width: 200px; margin: 10px;"
    />

    <el-button
      type="primary"
      icon="el-icon-search"
      @click="queryParkingLot()"
    >查询停车场</el-button>

    <el-button
      type="primary"
      icon="el-icon-edit"
      @click="addParkingLot()"
    >添加停车场</el-button>

    <el-table :data="list" border>
      <el-table-column prop="parkingLotID" label="停车场ID" />
      <el-table-column prop="parkingLotCreateTime" label="创建时间" />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            type="danger"
            icon="el-icon-delete"
            size="small"
            @click="deleteParkingLot(scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
import { getParkingLots, addParkingLot, deleteParkingLot } from '@/api/community'
export default {
  data() {
    return {
      list: null,
      query: {
        parkingLotID: '',
        parkingLotCreateTime: ''
      }
    }
  },
  created() {
    this.queryParkingLot()
  },
  methods: {
    queryParkingLot() {
      getParkingLots(this.query).then((response) => {
        this.list = response
        console.log(response)
      })
    },
    addParkingLot() {
      addParkingLot(this.query).then(() => {
        this.query.parkingLotID = ''
        this.queryParkingLot()
      })
    },
    deleteParkingLot(data) {
      deleteParkingLot(data).then(() => {
        this.queryParkingLot()
      })
    }
  }
}
</script>
