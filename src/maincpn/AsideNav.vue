<template>
  <div class="wrapper" :style="{flex: isCollapse ? '0 0 60px':'0 0 260px'}">
    <el-row class="pdl20 pdtb10">
        <i @click="collClick" :class="['pointer',isCollapse? 'el-icon-s-fold' : 'el-icon-s-unfold']"></i>
    </el-row>
    <el-menu
      :collapse="isCollapse"
      :default-active="'/dataSourceManage'"
      class="el-menu-vertical-demo"
      @select="handleSelect"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-submenu :key="nav.path" :index="nav.path" v-for="(nav, index) in navData">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>{{nav.text}}</span>
        </template>
        <template v-if="nav.hasOwnProperty('children') && nav.children.length">
            <el-menu-item v-for="secondNav in nav.children" v-show="secondNav.inNav" :route="secondNav" :index="secondNav.path">{{secondNav.text}}</el-menu-item>
        </template>
      </el-submenu>
   
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'aside-nav',
  props: {},
  data () {
    return {
        isCollapse: false
    }
  },
  computed: {
      navData(){
          return this.$router.options.routes.slice(1)
      }
  },
  watch: {},
  components: {},
  created () {},
  mounted () {
  },
  methods: {
      collClick(){
          this.isCollapse = !this.isCollapse;
      },
      handleOpen(key, keyPath){
        console.log(key, keyPath)
      },
      handleClose(key, keyPath){
        console.log(key, keyPath)
      },
      handleSelect(index, indexPath){
        console.log(index, indexPath);
        this.$router.push(index)
      },

  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  overflow-y: auto;
   /deep/ .el-menu {
      border-right: none;
  }
  .pdl20 {
      padding-left: 20px;
  }
}
</style>
