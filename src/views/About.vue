<template>
  <div class="wrapper">
    <el-row class="pdlr10 pdtb10 boder_b">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>数据源</el-breadcrumb-item>
        <el-breadcrumb-item>数据源管理</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <Filters class="boder_b" :filtersData="filtersData"></Filters>
    <div class="table_ctn mgt10">
      <SimbleTable :moduleData='moduleData'></SimbleTable>
    </div>
  </div>
</template>

<script>
import Filters from '@/maincpn/Filters'
import SimbleTable from '@/maincpn/SimbleTable'
export default {
  name: 'About',
  data () {
    return {
      filtersData: [],
      filterPostData: {},
      moduleData: {}
    }
  },
  components: {
    Filters,
    SimbleTable
  },
  computed: {
    spanNum(){
      return Math.floor(24/this.filtersData.length);
    },
  },
  watch: {
    filtersData:{
      deep: true,
      immediate: true,
      handler(){
        let obj = {};
        this.filtersData.forEach(element => {
          if(element.type !== 'opt'){
            obj[element.key] = ''
          }
        });
        this.filterPostData = obj;
      }
    }
  },
  created () {
    this.moduleData ={
      tableColumn:[
        {"name":"type","value":"key0","colWidth":0},
        {"name":"id","value":"id","colWidth":0},
        {"name":"名称","value":"名称","colWidth":0},
        {"name":"类型","value":"类型","colWidth":0},
        {"name":"用途","value":"用途","colWidth":0},
        {"name":"最后修改时间","value":"最后修改时间","colWidth":0},
        // {"name":"状态","value":"状态","colWidth":0}
      ],
      tableData:[
        {"id":30,"key0":"age","名称":32,"类型":30,"用途":30,"最后修改时间":30,"2019-01-05":30,"2019-01-16 ":30,
        "2019-01-19 ":30,
        "2019-01-02":30,"2019-01-06 ":30,"2019-01-01 ":30,
        "2019-01-04":30,"2019-01-14 ":1130,"2019-01-11 ":30,"2019-01-07":30,"2019-01-10 ":30,"2019-01-13 ":30,
        "2019-01-17":230,"2019-01-08 ":130},
        {"id":1,"key0":"gender","名称":41,"类型":1,"用途":1,"最后修改时间":71,"2019-01-05":1,"2019-01-16 ":31,"2019-01-19 ":1,"2019-01-02":2,"2019-01-06 ":1,"2019-01-01 ":1,"2019-01-04":1,"2019-01-14 ":1,"2019-01-11 ":1,"2019-01-07":1,"2019-01-10 ":11,"2019-01-13 ":21,"2019-01-17":81,"2019-01-08 ":1},
        {"id":70.5555,"key0":"weight","名称":70.5225,"类型":70.5555,"用途":70.5555,"最后修改时间":70.5555,"2019-01-05 ":70.5555,"2019-01-16":10.2345,"2019-01-19 ":70.5555,"2019-01-02":70.5555,"2019-01-06 ":70.5555,"2019-01-01":70.5555,"2019-01-04 ":70.5555,"2019-01-14":70.5555,"2019-01-11 ":70.5555,"2019-01-07":70.5555,"2019-01-10 ":70.5555,"2019-01-13":70.5555,"2019-01-17 ":70.5555,"2019-01-08":70.5555},
        {"id":70.5555,"key0":"weight","名称":70.5225,"类型":70.5555,"用途":70.5555,"最后修改时间":70.5555,"2019-01-05 ":70.5555,"2019-01-16":10.2345,"2019-01-19 ":70.5555,"2019-01-02":70.5555,"2019-01-06 ":70.5555,"2019-01-01":70.5555,"2019-01-04 ":70.5555,"2019-01-14":70.5555,"2019-01-11 ":70.5555,"2019-01-07":70.5555,"2019-01-10 ":70.5555,"2019-01-13":70.5555,"2019-01-17 ":70.5555,"2019-01-08":70.5555},
        {"id":70.5555,"key0":"weight","名称":70.5225,"类型":70.5555,"用途":70.5555,"最后修改时间":70.5555,"2019-01-05 ":70.5555,"2019-01-16":10.2345,"2019-01-19 ":70.5555,"2019-01-02":70.5555,"2019-01-06 ":70.5555,"2019-01-01":70.5555,"2019-01-04 ":70.5555,"2019-01-14":70.5555,"2019-01-11 ":70.5555,"2019-01-07":70.5555,"2019-01-10 ":70.5555,"2019-01-13":70.5555,"2019-01-17 ":70.5555,"2019-01-08":70.5555},
        {"id":70.5555,"key0":"weight","名称":70.5225,"类型":70.5555,"用途":70.5555,"最后修改时间":70.5555,"2019-01-05 ":70.5555,"2019-01-16":10.2345,"2019-01-19 ":70.5555,"2019-01-02":70.5555,"2019-01-06 ":70.5555,"2019-01-01":70.5555,"2019-01-04 ":70.5555,"2019-01-14":70.5555,"2019-01-11 ":70.5555,"2019-01-07":70.5555,"2019-01-10 ":70.5555,"2019-01-13":70.5555,"2019-01-17 ":70.5555,"2019-01-08":70.5555},
        {"id":70.5555,"key0":"weight","名称":70.5225,"类型":70.5555,"用途":70.5555,"最后修改时间":70.5555,"2019-01-05 ":70.5555,"2019-01-16":10.2345,"2019-01-19 ":70.5555,"2019-01-02":70.5555,"2019-01-06 ":70.5555,"2019-01-01":70.5555,"2019-01-04 ":70.5555,"2019-01-14":70.5555,"2019-01-11 ":70.5555,"2019-01-07":70.5555,"2019-01-10 ":70.5555,"2019-01-13":70.5555,"2019-01-17 ":70.5555,"2019-01-08":70.5555}
      ],
      tableHead:"demo_普通表格_维度在纵轴[展示名]"
    };
    this.filtersData = [
          {
            id: 1,
            type: 'input',
            label: '关键字',
            key: 'keyWord',
            class: 'wth_90'
          },
          {
            id: 1,
            type: 'input',
            label: '负责人',
            key: 'author',
            class: 'wth_90'
          },
          { 
            id: 2,
            type: 'select',
            label: '类型',
            key: 'type',
            class: 'wth_90',
            options: [
              {
                label: '类型1',
                value: 'value1'
              },
              {
                label: '类型2',
                value: 'value2'
              },
              {
                label: '类型3',
                value: 'value3'
              }
            ]
          },
          {
            id: 3,
            type: 'opt',
            label: '查询',
            key: '',
            class: 'wth_90',
            method: 'queryList',
            api: 'queryList'
          }
        ];
  },
  mounted () {},
  methods: {
    query(){
      // 请求 api
      console.log(this.filterPostData);
    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  padding: 15px 10px;
  box-sizing: border-box;
  overflow: hidden;
  .wth_70p {
    width: 70%;
  }
  .table_ctn {
    max-width: 100%;
    overflow-x: auto;
  }
}
</style>
