<template>
  <div class="wrapper pd10">
    <el-row class="pdlr10 pdtb10 boder_b">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>数据源</el-breadcrumb-item>
        <el-breadcrumb-item>数据源</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <el-row class="t_l boder_b pd10 font_12">基本信息</el-row>
    <el-row class="pd10 boder_b">
      <el-form>
        <el-col v-for="item in filtersData" :span="12">
          <el-form-item label-width="100px" :label="item.type !== 'opt'? item.label:''">
            <el-input size="small" class="wth_70p" v-if="item.type==='input'" v-model="filterPostData[item.key]"></el-input>
            <el-input size="small" type="password" class="wth_70p" v-if="item.type==='password'" v-model="filterPostData[item.key]"></el-input>

            <el-input size="small" type="textarea" :rows="5" class="wth_70p" v-if="item.type==='textarea'" v-model="filterPostData[item.key]"></el-input>

            <el-select size="small" class="wth_70p" v-if="item.type==='select'" v-model="filterPostData[item.key]">
              <el-option v-for="optItem in item.options" :key="optItem.value" :label="optItem.label" :value="optItem.value"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-form>
    </el-row>
    <el-row class="t_c mgt10">
      <el-button size="small" @click="save" type="primary">
        保存
      </el-button>
      <el-button class="mgl40" size="small" @click="cancle" type="primary">
        取消
      </el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'edit-or-create',
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
            label: '数据源名称',
            key: 'keyWord',
            class: 'wth_90'
          },
          {
            id: 1,
            type: 'select',
            label: '负责人',
            key: 'author',
            class: 'wth_90'
          },
          { 
            id: 2,
            type: 'select',
            label: '数据源类型',
            key: 'type',
            class: 'wth_90',
            options: [
              {
                label: 'GP',
                value: 'GP'
              },
              {
                label: 'MySQL',
                value: 'MySQL'
              }
            ]
          },
          {
            id: 4,
            type: 'input',
            label: '域名/IP',
            key: 'ip',
            class: 'wth_90'
          },
          {
            id: 5,
            type: 'input',
            label: '端口',
            key: 'port',
            class: 'wth_90'
          },
          {
            id: 6,
            type: 'input',
            label: '库名',
            key: 'DBName',
            class: 'wth_90'
          },
          {
            id: 7,
            type: 'input',
            label: '用户名',
            key: 'userName',
            class: 'wth_90'
          },
          {
            id: 8,
            type: 'password',
            label: '密码',
            key: 'password',
            class: 'wth_90'
          },
          {
            id: 8,
            type: 'textarea',
            label: '用途',
            key: '描述',
            class: 'wth_90'
          }
        ];
  },
  mounted () {},
  methods: {
    save(){
      // 请求 api
      console.log(this.filterPostData);
    },
    cancle(){
      this.$router.push({path:'/'})
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
  .font_12 {
    font-size: 12px;
  }
  /deep/ .el-form-item__label::before{
    color: rgb(236, 43, 43);
    content: '*';
    margin-right: 10px;
  }
}
</style>
