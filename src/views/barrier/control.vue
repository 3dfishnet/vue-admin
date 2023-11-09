<template>
  <div>
    <!-- 道闸ID 车牌号 车辆类型 备注 -->
    <el-form
      :model="carInInfo"
      label-position="left"
      label-width="70px"
      style="width: 400px; margin: 20px"
    >
      <el-form-item label="道闸ID">
        <el-select v-model="carInInfo.carInBarrierEquipmentID" placeholder="请选择道闸ID" required>
          <el-option
            v-for="id in barrierIDList"
            :key="id"
            :label="id"
            :value="id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="车牌号">
        <el-input v-model="carInInfo.carInCarID" placeholder="请输入车牌号" />
      </el-form-item>
      <el-form-item label="车辆类型">
        <el-select v-model="carInInfo.carInCarType" placeholder="请选择车辆类型">
          <el-option label="小车" value="1" />
          <el-option label="大车" value="2" />

        </el-select>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="carInInfo.carInDescription" type="textarea" row="2" placeholder="备注" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="carIn()">手工进场</el-button>
      </el-form-item>
    </el-form>
    <!-- 道闸ID 车牌号 应收 实收 备注 -->
    <el-form
      :model="carInInfo"
      label-position="left"
      label-width="70px"
      style="width: 400px; margin: 20px"
    >
      <el-form-item label="道闸ID">
        <el-select v-model="carOutInfo.carOutBarrierEquipmentID" placeholder="请选择道闸ID">
          <el-option
            v-for="id in barrierIDList"
            :key="id"
            :label="id"
            :value="id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="车牌号">
        <el-input v-model="carOutInfo.carOutCarID" placeholder="请输入车牌号" />
      </el-form-item>
      <el-form-item label="应收">
        <el-input v-model="carOutInfo.carOutMoneyReceivable" disabled />
      </el-form-item>
      <el-form-item label="实收">
        <el-input v-model="carOutInfo.carOutMoneyLast" placeholder="" />
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="carOutInfo.carOutDescription" type="textarea" row="2" placeholder="备注" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="carOut()">手工出场</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
import { getDevices, carIn, carOut } from '@/api/barrier'
export default {
  data() {
    return {
      carInInfo: {
        carInID: '',
        carInBarrierEquipmentID: '',
        carInCarID: '',
        carInTime: '',
        carInDescription: '',
        carInCarType: ''
      },
      carOutInfo: {
        carOutID: '',
        carOutBarrierEquipmentID: '',
        carOutCarID: '',
        carOutTime: '',
        carOutDescription: '',
        carOutMoneyReceivable: '5',
        carOutMoneyLast: ''
      },
      query: {
        barrierEquipmentID: '',
        barrierEquipmentIP: '',
        barrierEquipmentMacAddress: ''
      },
      barrierIDList: []
    }
  },
  created() {
    this.queryBarrierID()
  },
  methods: {
    queryBarrierID() {
      getDevices(this.query).then((response) => {
        const barrierList = response.data
        // console.log(barrierList)
        for (const key in barrierList) {
          this.barrierIDList.push(barrierList[key]['barrierEquipmentID'])
        }
        // console.log(this.barrierIDList)
      })
    },
    carIn() {
      carIn(this.carInInfo)
    },
    carOut() {
      carOut(this.carOutInfo)
    }
  }
}
</script>

