<template>
  <div>
    <el-input
      v-model="query.carID"
      placeholder="请输入车牌号"
      style="width: 200px; margin: 10px;"
    />

    <el-button
      type="primary"
      icon="el-icon-search"
      @click="queryCar()"
    >查询</el-button>

    <el-table :data="list" border>
      <el-table-column prop="carID" label="车牌号" />
      <el-table-column prop="person.personName" label="联系人" />
      <el-table-column prop="person.personPhone" label="联系电话" />
      <el-table-column label="车辆类型">
        <template slot-scope="scope">
          <span>{{ scope.row.carType === '1' ? '小车' : '大车' }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            type="danger"
            icon="el-icon-delete"
            size="small"
            @click="deleteCar(scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
import { getCars, deleteCar } from '@/api/community'
export default {
  data() {
    return {
      list: null,
      query: { carID: '' }
    }
  },
  created() {
    this.queryCar()
  },
  methods: {
    queryCar() {
      getCars(this.query).then((response) => {
        this.list = response
        console.log(response)
      })
    },
    deleteCar(data) {
      deleteCar(data).then(() => {
        this.queryCar()
      })
    }
  }
}
</script>

