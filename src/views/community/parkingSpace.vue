<template>
  <div>
    <el-input
      v-model="query.parkingSpaceID"
      placeholder="请输入停车位ID"
      style="width: 200px; margin: 10px;"
    />

    <el-button
      type="primary"
      icon="el-icon-search"
      @click="queryParkingSpace()"
    >查询停车位</el-button>

    <el-button
      type="primary"
      icon="el-icon-edit"
      @click="dialogFormVisible = true"
    >添加停车位</el-button>

    <el-dialog title="停车位" :visible.sync="dialogFormVisible">
      <el-form
        :model="temp"
        label-position="left"
        label-width="100px"
        style="width: 400px; margin-left: 50px"
      >
        <el-form-item label="停车位ID">
          <el-input v-model="temp.parkingSpaceID" placeholder="请输入停车位ID" />
        </el-form-item>
        <el-form-item label="所属停车场ID">
          <el-input v-model="temp.parkingSpaceParkingLotID" placeholder="请输入停车场ID" />
        </el-form-item>
        <el-form-item label="车辆ID">
          <el-input v-model="temp.parkingSpaceCarID" placeholder="请输入车辆ID" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button
          type="primary"
          @click="addParkingSpace()"
        >提交</el-button>
      </div>
    </el-dialog>

    <el-table :data="list" border>
      <el-table-column prop="parkingSpaceID" label="停车位ID" />
      <el-table-column prop="parkingSpaceCreateTime" label="创建时间" />
      <el-table-column prop="parkingSpaceParkingLotID" label="所属停车场ID" />
      <el-table-column prop="parkingSpaceCarID" label="车辆ID" />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            type="danger"
            icon="el-icon-delete"
            size="small"
            @click="deleteParkingSpace(scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
import { getParkingSpaces, addParkingSpace, deleteParkingSpace } from '@/api/community'
export default {
  data() {
    return {
      list: null,
      query: { parkingSpaceID: '' },
      temp: {
        parkingSpaceID: '',
        parkingSpaceCreateTime: '',
        parkingSpaceParkingLotID: '',
        parkingSpaceCarID: ''
      },
      dialogFormVisible: false
    }
  },
  created() {
    this.queryParkingSpace()
  },
  methods: {
    queryParkingSpace() {
      getParkingSpaces(this.query).then((response) => {
        this.list = response
        console.log(response)
      })
    },
    addParkingSpace() {
      addParkingSpace(this.temp).then(() => {
        this.queryParkingSpace()
      })
    },
    deleteParkingSpace(data) {
      deleteParkingSpace(data).then(() => {
        this.queryParkingSpace()
      })
    }
  }
}
</script>
