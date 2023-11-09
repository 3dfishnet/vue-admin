<template>
  <div>
    <el-input v-model="query.barrierEquipmentID" placeholder="道闸编码" style="width: 200px; margin: 5px;" />
    <el-input v-model="query.barrierEquipmentIP" placeholder="道闸IP" style="width: 200px; margin: 5px;" />
    <el-input v-model="query.barrierEquipmentMacAddress" placeholder="道闸Mac" style="width: 200px; margin: 5px;" />
    <el-button type="primary" icon="el-icon-search" style="margin: 5px;" @click="queryDevice()">查询道闸</el-button>
    <el-button type="primary" icon="el-icon-search" style="margin: 5px;" @click="dialogFormVisible = true">添加道闸</el-button>

    <el-dialog title="道闸" :visible.sync="dialogFormVisible">
      <el-form
        :model="temp"
        label-position="left"
        label-width="100px"
        style="width: 400px; margin-left: 50px"
      >

        <el-form-item label="MAC">
          <el-input v-model="temp.barrierEquipmentMacAddress" placeholder="请输入道闸MAC" />
        </el-form-item>
        <el-form-item label="IP">
          <el-input v-model="temp.barrierEquipmentIP" placeholder="请输入道闸IP" />
        </el-form-item>
        <el-form-item label="IP版本">
          <el-select v-model="temp.barrierEquipmentIPVersion" placeholder="请选择门禁IP版本">
            <el-option label="4" value="4" />
            <el-option label="6" value="6" />
          </el-select>
        </el-form-item>
        <el-form-item label="名称">
          <el-input v-model="temp.barrierEquipmentName" placeholder="请输入道闸名称" />
        </el-form-item>
        <el-form-item label="OEM">
          <el-input v-model="temp.barrierEquipmentProtocol" placeholder="请输入道闸厂家" />
        </el-form-item>
        <el-form-item label="门禁方向">
          <el-select v-model="temp.barrierEquipmentDirection" placeholder="请选择设备方向">
            <el-option label="进场" value="进" />
            <el-option label="出场" value="出" />
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="addDevice()">提交</el-button>
      </div>
    </el-dialog>

    <el-table v-loading="listLoading" :data="list" element-loading-text="Loading" border fit highlight-current-row>
      <el-table-column prop="barrierEquipmentName" label="名称" />
      <el-table-column prop="barrierEquipmentID" label="道闸编码" />
      <el-table-column prop="barrierEquipmentIP" label="道闸IP" />
      <el-table-column prop="barrierEquipmentIPVersion" label="IP版本号" />
      <el-table-column prop="barrierEquipmentDirection" label="方向" />
      <el-table-column prop="barrierEquipmentMacAddress" label="MAC地址" />
      <el-table-column prop="barrierEquipmentProtocol" label="厂商" />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            type="danger"
            icon="el-icon-delete"
            size="small"
            @click="deleteDevice(scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
import { getDevices, addDevice, deleteDevice } from '@/api/barrier'
import { Message } from 'element-ui'
export default {
  data() {
    return {
      list: null,
      listLoading: false,
      dialogFormVisible: false,
      query: {
        barrierEquipmentID: '',
        barrierEquipmentIP: '',
        barrierEquipmentMacAddress: ''
      },
      temp: {
        barrierEquipmentID: '0',
        barrierEquipmentName: '',
        barrierEquipmentDirection: '',
        barrierEquipmentIP: '',
        barrierEquipmentIPVersion: '',
        barrierEquipmentMacAddress: '',
        barrierEquipmentProtocol: ''
      }
    }
  },
  created() {
    this.queryDevice()
  },
  methods: {
    queryDevice() {
      this.listLoading = true
      getDevices(this.query).then(response => {
        this.list = response.data
        this.listLoading = false
      })
    },
    addDevice() {
      if (!this.checkAddForm(this.temp)) {
        Message({ type: 'error', message: '必须全部填写' })
        return
      }
      addDevice(this.temp).then((response) => {
        this.queryDevice()
        Message(response.data)
        this.dialogFormVisible = false
      })
    },
    deleteDevice(data) {
      deleteDevice(data).then((response) => {
        Message({ message: response.data })
        this.queryDevice()
      })
    },
    checkAddForm(obj) {
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key) && (obj[key] === null || obj[key] === undefined || obj[key] === '')) {
          return false
        }
      }
      return true
    }
  }
}
</script>
