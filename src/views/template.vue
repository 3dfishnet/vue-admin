<template>
  <div>
    <el-input
      placeholder=""
      style="width: 200px; margin: 10px;"
    />

    <el-button
      type="primary"
      icon="el-icon-search"
    >BUTTON1</el-button>

    <el-button
      type="primary"
      icon="el-icon-edit"
    >BUTTON2</el-button>

    <el-table :data="list" border>
      <el-table-column prop="" label="" />
      <el-table-column prop="" label="创" />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            type="danger"
            icon="el-icon-delete"
            size="small"
            @click="delete(scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="dialogFormTitle" :visible.sync="dialogFormVisible">
      <el-form
        :model="temp"
        label-position="left"
        label-width="70px"
        style="width: 400px; margin-left: 50px"
      >
        <el-form-item label="">
          <el-input v-model="undef" placeholder="请输入1" />
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="undef" placeholder="请输入2" />
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="undef" placeholder="请输入3" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button
          type="primary"
          @click="{}"
        >提交</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
export default {
  data() {
    return {
      list: null,
      dialogFormVisible: false,
      temp: null,
      undef: null
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

