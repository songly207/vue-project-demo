<template>
  <div class='simpletableWrap'>
    <el-table border :data="tableData" size="mini" v-if="tableColumn&& tableColumn.length">
        <el-table-column
          :key="tableColumn[0].value"
          :prop="tableColumn[0].value"
          align="left"
          class-name='cellFreeze'
          :width="tableColumn[0].colWidth || 'auto'"
          :label="tableColumn[0].name">
        </el-table-column>
        <el-table-column
          v-for="(f,index) in tableColumn"
           v-if="index !=0"
          :key="f.value"
          :prop="f.value"
          :label="f.name"
          :width="f.colWidth || 'auto'"
          :min-width= "f.colWidth || 90"
          align="center"
        >
          <template slot-scope="scope">
                <!-- <span>{{scope.$index}}</span> -->
                <!-- <span>{{scope.column}}</span> -->
                  <span>{{scope.row[f.value]}}</span>
          </template>
        </el-table-column>
         <el-table-column
          label='操作'
          align="center"
           :width="120">
            <template slot-scope="scope">
              <span class="fl opt" @click="handleEdit(scope.$index, scope.row)">编辑</span>
              <span class="opt fl mgl10" type="primary" @click="handleDelete(scope.$index, scope.row)">删除</span>
            </template>
      </el-table-column>
    </el-table>
    <el-row class="mgt10">
      <div class="fr">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          layout="total, prev, pager,sizes, next"
          :total="1000">
        </el-pagination>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "SimbleTable",
  props: ['moduleData',
          'taleDataID'],
  data() {
    return {
        tableColumn: [],
        tableData: [],
        tableHead: [],
        currentPage: 1
    }
  },
  computed:{
  },
  watch:{
    moduleData:{
      deep: true,
      immediate: true,
      handler(oldVal,newVal){
        this.initData()
      }
    }
  },
  components: {},
  mounted() {
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleEdit(index, row){
    },
    handleDelete(index, row){
    },
    initData(){
      if(this.moduleData) {
        this.$nextTick(()=>{
            this.$nextTick(()=>{
              this.tableColumn = this.moduleData.tableColumn;
            })
            this.tableHead = this.moduleData.tableHead;
            this.tableData = this.moduleData.tableData;
          })
        }
    }
  
  }
};
</script>
<style lang='scss' scoped>
.simpletableWrap {
    text-align: center;
    /deep/ .el-table .el-table__header th {
        background-color: #ebf0fc;
    }
    .opt {
      padding: 0px 3px;
      text-align: center;
      min-width: 30px;
      border:1px solid #cfcfcf;
      border-radius: 4px;
      cursor: pointer;
    }
    .opt:hover {
      border: 1px solid rgb(89, 152, 235);
      background: rgb(89, 152, 235);
      color: white;
    }
}
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
</style>