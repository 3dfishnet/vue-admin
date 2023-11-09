<template>
  <div>
    <el-input v-model="query.gatewayEquipmentID" placeholder="门禁编码" style="width: 200px; margin: 5px;" />
    <el-input v-model="query.gatewayEquipmentIP" placeholder="门禁IP" style="width: 200px; margin: 5px;" />
    <el-input v-model="query.gatewayEquipmentMacAddress" placeholder="门禁Mac" style="width: 200px; margin: 5px;" />
    <el-button type="primary" icon="el-icon-search" style="margin: 5px;" @click="queryDevice()">查询门禁</el-button>
    <el-button type="primary" icon="el-icon-search" style="margin: 5px;" @click="dialogFormVisible = true">添加门禁</el-button>

    <el-dialog title="门禁" :visible.sync="dialogFormVisible">
      <el-form
        :model="temp"
        label-position="left"
        label-width="100px"
        style="max-width: 400px; margin-left: 50px"
      >

        <el-form-item label="MAC">
          <el-input v-model="temp.gatewayEquipmentMacAddress" placeholder="请输入门禁MAC" />
        </el-form-item>
        <el-form-item label="IP">
          <el-input v-model="temp.gatewayEquipmentIP" placeholder="请输入门禁IP" />
        </el-form-item>
        <el-form-item label="IP版本">
          <el-select v-model="temp.gatewayEquipmentIPVersion" placeholder="请选择门禁IP版本">
            <el-option label="4" value="4" />
            <el-option label="6" value="6" />
          </el-select>
        </el-form-item>
        <el-form-item label="名称">
          <el-input v-model="temp.gatewayEquipmentName" placeholder="请输入门禁名称" />
        </el-form-item>
        <el-form-item label="OEM">
          <el-input v-model="temp.gatewayEquipmentBrand" placeholder="请输入门禁厂家" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="addDevice()">提交</el-button>
      </div>
    </el-dialog>

    <el-table v-loading="listLoading" :data="list" element-loading-text="Loading" border fit highlight-current-row>
      <el-table-column prop="gatewayEquipmentName" label="名称" />
      <el-table-column prop="gatewayEquipmentID" label="门禁编码" />
      <el-table-column prop="gatewayEquipmentIP" label="门禁IP" />
      <el-table-column prop="gatewayEquipmentIPVersion" label="IP版本号" />
      <el-table-column prop="gatewayEquipmentMacAddress" label="MAC地址" />
      <el-table-column prop="gatewayEquipmentBrand" label="厂商" />
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
    <!-- gatewayEquipmentID, gatewayEquipmentName, gatewayEquipmentIP,
        gatewayEquipmentIPVersion, gatewayEquipmentMacAddress, gatewayEquipmentBrand -->
<script>
import { getDevices, addDevice, deleteDevice } from '@/api/gateway'
import { Message } from 'element-ui'
export default {
  data() {
    return {
      list: null,
      listLoading: false,
      dialogFormVisible: false,
      query: {
        gatewayEquipmentID: '',
        gatewayEquipmentIP: '',
        gatewayEquipmentMacAddress: ''
      },
      temp: {
        gatewayEquipmentID: '0',
        gatewayEquipmentName: '',
        gatewayEquipmentIP: '',
        gatewayEquipmentIPVersion: '',
        gatewayEquipmentMacAddress: '',
        gatewayEquipmentBrand: ''
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
        this.list = response
        // this.listLoading = false
      })
      this.listLoading = false
    },
    addDevice() {
      if (!this.checkAddForm(this.temp)) {
        Message({ type: 'error', message: '必须全部填写' })
        return
      }
      addDevice(this.temp).then(() => {
        this.queryDevice()
        // this.dialogFormVisible = false
      })
      this.dialogFormVisible = false
    },
    deleteDevice(data) {
      deleteDevice(data).then(() => {
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

