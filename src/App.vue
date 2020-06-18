<template>
  <div id="app">
    <Header></Header>
    <div class="wrap">
      <transition>
        <router-view/>
      </transition>
    </div>
  </div>
</template>
<script>
const Header = () => import('@/maincpn/Header')
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-flow: column wrap;
  min-height: 100%;
}
.wrap {
  flex: 1;
  width: 100%;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
