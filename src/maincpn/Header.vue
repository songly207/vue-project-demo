<template>
  <div class="header">
    <img
      @click="goIndex"
      :src="require('@/assets/img/logo.svg')"
      class="logo"
    />

    <div class="fl">
        <ul class="nav">
            <li :class="['nav_item',curNavIdx === idx ? 'cur_nav_item':'']" @click="navClick(item,idx)" :key="item.path" v-for="(item, idx) in navList" >
                {{ item.name }}
            </li>
        </ul>
    </div>

    <span v-if="userId" class="fr pdlr10 pointer" @click="loginOut">
      <i class="el-icon-switch-button"></i>
      退出
    </span>
    <span class="fr pdlr10 user_text mgr10">
      <i class="el-icon-s-custom"></i>
      {{ userId }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'header-self',
  data () {
    return {
      curNavIdx: 0,
      navList: [
        {
          name: '数据源管理',
          href: '',
          path: '/'
        },
        // {
        //   name: '数据源管理',
        //   href: '',
        //   path: '/about'
        // }
      ]
    }
  },

  computed: {
    userId () {
      return this.$store.state.user.userId
    },
    curTaskOwnerRole () {
      return this.$store.state.curTaskOwnerRole
    }
  },
  mounted () {},
  watch: {
    '$route.path': 'initNav',
    curTaskOwnerRole: {
      handler (newVal) {
        localStorage.setItem('role', this.curTaskOwnerRole)
      }
    }
  },
  methods: {
    loginOut () {
      this.$store.commit('setCurrentUserId', '')
      this.$store.state.user.isFBIUser = ''
      this.$store.state.metaData.gianos = []
      sessionStorage.clear()
      localStorage.clear()
      location.href = 'https://uuap.baidu.com/logout'
    },
    initNav () {
      let newVal = location.hash.substr(1)
      this.navList.map((item, idx) => {
        if (item.path.toLowerCase() === newVal.toLowerCase()) {
          this.curNavIdx = idx
        }
      })
    },
    goIndex () {
      this.curNavIdx = 0
      this.$router.push({ path: '/' })
    },
    navClick (item, idx) {
      if (item.path) {
        this.curNavIdx = idx
        this.$router.push({ path: item.path })
      }
    }
  }
}
</script>
<style scoped>
.header {
  height: 50px;
  line-height: 50px;
  min-width: 1280px;
  width: 100%;
  z-index: 999;
  flex-shrink: 0;
  flex-basis: 50px;
  /* background-image: linear-gradient( 135deg, #5EFCE8 10%, #736EFE 100%); */
  /* background-image: linear-gradient( 135deg, #0396FF 10%, #409cff 100%); */
  /* background-image: linear-gradient( 135deg, #ABDCFF 9%, #409cff 100%); */
  background: #3a3a3a;
  color: #fff;
  box-sizing: border-box;
}
.logo {
  width: 225px;
  margin-left: 25px;
  margin-top: 10px;
  float: left;
  cursor: pointer;
}
.nav {
  width: 600px;
  margin-left: 30px;
  line-height: 50px;
  display: flex;
  flex-flow: row nowrap;
  font-size: 16px;
  color: white;
}
.nav_item {
    padding: 0 14px;
    min-width: 50px;
    cursor: pointer;
    text-align: center;
    text-align-last: justify;
}
.nav_item:hover {
    background: #314F6A;
}
.cur_nav_item {
    background: #314F6A;
}
.logo_text,
.user_text {
  margin-left: 10px;
  font-size: 18px;
  font-weight: 600;
}
.user_text {
  font-size: 14px;
  font-weight: normal;
  color: white;
}
</style>
