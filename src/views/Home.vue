<template>
  <div class="home">
    <AsideNav class="aside_nav"></AsideNav>
    <div class="main_ctn">
      <transition>
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AsideNav from '@/maincpn/AsideNav.vue'

export default {
  name: 'Home',
  components: {
    AsideNav
  }
}
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  flex-flow: row nowrap;
  max-width: 100%;
  .aside_nav {
    flex: 0 0 260px;
    box-sizing: border-box;
    border-right: 1px solid #cfcfcf;
    height: 100%;
    min-height: 610px;
  }
  .main_ctn {
    flex: 1;
    max-width: calc(100% - 260px);
  }
}
</style>
