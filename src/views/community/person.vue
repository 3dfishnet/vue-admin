<template>
  <div>
    <el-input
      v-model="query.personName"
      placeholder="人员名称"
      style="width: 200px; margin: 10px;"
    />
    <el-select v-model="query.personType" placeholder="人员类型">
      <el-option
        label=""
        value=""
      />
      <el-option
        label="员工"
        value="1"
      />
      <el-option
        label="业主"
        value="2"
      />
      <el-option
        label="访客"
        value="3"
      />
    </el-select>
    <el-button
      type="primary"
      icon="el-icon-search"
      @click="queryCommunityPerson()"
    >查询人员</el-button>
    <el-button
      type="primary"
      icon="el-icon-search"
      @click="addCommunityPerson()"
    >添加人员</el-button>
    <el-dialog :title="dialogFormTitle" :visible.sync="dialogFormVisible">
      <el-form
        ref="dataForm"
        :model="temp"
        label-position="left"
        label-width="70px"
        style="width: 400px; margin-left: 50px"
      >
        <el-form-item label="名称">
          <el-input v-model="temp.personName" placeholder="请输入人员名称" />
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="temp.personPhone" placeholder="请输入电话" />
        </el-form-item>
        <el-form-item label="身份证">
          <el-input v-model="temp.personID" placeholder="请输入身份证" />
        </el-form-item>
        <el-form-item label="人员类型">
          <el-select
            v-model="temp.personType"
            class="filter-item"
            placeholder="请选择人员类型"
          >
            <el-option key="1" label="员工" value="1" />
            <el-option key="2" label="业主" value="2" />
            <el-option key="3" label="访客" value="3" />
          </el-select>
        </el-form-item>
        <el-form-item label="人脸">
          <el-input v-model="temp.personFace" placeholder="请输入人脸" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button
          type="primary"
          @click="saveCommunityPerson()"
        >提交</el-button>
      </div>
    </el-dialog>

    <el-table v-loading="listLoading" :data="list" element-loading-text="Loading" border fit highlight-current-row>
      <el-table-column label="人脸" width="102">
        <template slot-scope="scope">
          <div>{{ scope.row.personFace }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="personName" label="名称" />
      <el-table-column prop="personPhone" label="电话" />
      <el-table-column prop="personID" label="身份证" />
      <el-table-column label="人员类型">
        <template slot-scope="scope">
          <span>
            {{
              scope.row.personType == "1"
                ? "员工"
                : scope.row.personType == "2"
                  ? "业主"
                  : "访客"
            }}
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="personCreateTime" label="创建时间" />

      <el-table-column label="操作" width="178">
        <template slot-scope="scope">
          <div>
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="small"
              @click="modifyCommunityPerson(scope.row)"
            >修改</el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="small"
              @click="deleteCommunityPerson(scope.row)"
            >删除</el-button>
          </div>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
import { getCommunityPersons, addCommunityPerson, deleteCommunityPerson } from '@/api/community'
import { Message } from 'element-ui'

export default {
  data() {
    return {
      list: null,
      query: {
        personName: '',
        personType: ''
      },
      temp: { // 和Dialog的表单中数据绑定
        personID: '',
        personName: '',
        personPhone: '',
        personType: '',
        personFace: '',
        personCreateTime: ''
      },
      target: null,
      listLoading: false,
      dialogFormVisible: false,
      dialogFormTitle: ''
    }
  },
  created() {
    this.queryCommunityPerson()
  },
  methods: {
    queryCommunityPerson() {
      this.listLoading = true
      getCommunityPersons(this.query).then(response => {
        this.list = response.data
        this.listLoading = false
      })
    },
    deleteCommunityPerson(data) {
      this.listLoading = true
      deleteCommunityPerson(data).then(response => {
        this.listLoading = false
        this.queryCommunityPerson()
      })
    },
    addCommunityPerson() {
      this.dialogFormTitle = '添加人员'
      this.clearObj(this.temp)
      this.dialogFormVisible = true
    },
    modifyCommunityPerson(data) {
      this.dialogFormTitle = '修改人员'
      this.temp = { ...data }
      this.target = { ...data }
      this.dialogFormVisible = true
    },
    saveCommunityPerson() {
      this.listLoading = true
      if (this.temp.personID === '') {
        Message('ID 不能为空！')
      } else if (!this.deepEqual(this.temp, this.target)) { // 比较表单前后有无变化
        if (this.dialogFormTitle === '修改人员') {
          deleteCommunityPerson(this.target)
        }
        addCommunityPerson(this.temp).then((res) => {
          this.queryCommunityPerson()
        })
      }
      this.listLoading = false
      this.dialogFormVisible = false
    },
    deepEqual(obj1, obj2) {
      // 如果两个对象引用相同，则它们肯定相等
      if (obj1 === obj2) {
        return true
      }
      // 如果两个对象中一个为null或不是对象，则它们不相等
      if (obj1 === null || obj2 === null || typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return false
      }
      // 获取两个对象的属性名
      const keys1 = Object.keys(obj1)
      const keys2 = Object.keys(obj2)
      // 如果属性数量不同，它们不相等
      if (keys1.length !== keys2.length) {
        return false
      }
      // 递归比较对象的属性值
      for (const key of keys1) {
        if (!this.deepEqual(obj1[key], obj2[key])) {
          return false
        }
      }
      // 如果上面的条件都没有匹配，那么这两个对象是深度相等的
      return true
    },
    clearObj(obj) {
      for (const key in obj) {
        obj[key] = ''
      }
    }
  }
}
</script>

