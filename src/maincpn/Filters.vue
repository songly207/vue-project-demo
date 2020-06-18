<template>
  <div class="">
    <el-row class=" pdlr10">
      <el-form>
        <el-col v-for="item in filtersData" :span="spanNum">
          <el-form-item :label="item.type !== 'opt'? item.label:''">
            <el-input size="small" class="wth_70p" v-if="item.type==='input'" v-model="filterPostData[item.key]"></el-input>

            <el-select size="small" v-if="item.type==='select'" v-model="filterPostData[item.key]">
              <el-option v-for="optItem in item.options" :key="optItem.value" :label="optItem.label" :value="optItem.value"></el-option>
            </el-select>
            <span v-if="item.type==='opt'">
              <el-button v-for="op in item.options " size="small" @click="query(op)" type="primary">
                {{op.label}}
              </el-button>
            </span>
          </el-form-item>
        </el-col>
      </el-form>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'filters',
  props: {
    // filtersData: {
    //   type: Array,
    //   default(){
    //     return []
    //   } 
    // }
  },
  data () {
    return {
      filtersData: [],
      filterPostData: {}
    }
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
  components: {},
  created () {
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
            options:[
              {
                label: '查询',
                key: '',
                class: 'wth_90',
                method: 'queryList',
                api: 'queryList'
              },
              {
                label: '新增',
                key: '',
                class: 'wth_90',
                method: 'add',
                api: 'queryList'
              }
            ]
          }
        ];
  },
  mounted () {},
  methods: {
    query(op){
      // 请求 api
      console.log(op, this.filterPostData);
      if(op.method === 'add'){
        this.$router.push({path:'/editOrCreate'})
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  box-sizing: border-box;
  .wth_70p {
    width: 70%;
  }
}
</style>
